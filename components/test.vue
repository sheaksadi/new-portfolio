<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

interface Position {
  x: number;
  y: number;
}

interface Config {
  starAnimationDuration: number;
  minimumTimeBetweenStars: number;
  minimumDistanceBetweenStars: number;
  glowDuration: number;
  maximumGlowPointSpacing: number;
  colors: string[];
  sizes: string[];
  animations: string[];
}

const start = new Date().getTime();

const originPosition: Position = { x: 0, y: 0 };

const last = reactive({
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition,
});

const config: Config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ['249 146 253', '252 254 255'],
  sizes: ['1.4rem', '1rem', '0.6rem'],
  animations: ['fall-1', 'fall-2', 'fall-3'],
};

let count = 0;

const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const selectRandom = <T>(items: T[]): T => items[rand(0, items.length - 1)];

const withUnit = (value: number, unit: string) => `${value}${unit}`;
const px = (value: number) => withUnit(value, 'px');
const ms = (value: number) => withUnit(value, 'ms');

const calcDistance = (a: Position, b: Position): number => {
  const diffX = b.x - a.x;
  const diffY = b.y - a.y;
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start: number, end: number) => end - start;

const appendElement = (element: HTMLElement) => document.body.appendChild(element);
const removeElement = (element: HTMLElement, delay: number) =>
    setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position: Position) => {
  const star = document.createElement('span');
  const color = selectRandom(config.colors);

  star.className = 'star fa-solid fa-sparkle';
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.animationDuration = ms(config.starAnimationDuration);

  appendElement(star);
  removeElement(star, config.starAnimationDuration);
};

const createGlowPoint = (position: Position) => {
  const glow = document.createElement('div');
  glow.className = 'glow-point';
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);
  appendElement(glow);
  removeElement(glow, config.glowDuration);
};

const determinePointQuantity = (distance: number) =>
    Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

const createGlow = (last: Position, current: Position) => {
  const distance = calcDistance(last, current);
  const quantity = determinePointQuantity(distance);
  const dx = (current.x - last.x) / quantity;
  const dy = (current.y - last.y) / quantity;

  Array.from(Array(quantity)).forEach((_, index) => {
    const x = last.x + dx * index;
    const y = last.y + dy * index;
    createGlowPoint({ x, y });
  });
};

const updateLastStar = (position: Position) => {
  last.starTimestamp = new Date().getTime();
  last.starPosition = position;
};

const updateLastMousePosition = (position: Position) => {
  last.mousePosition = position;
};

const adjustLastMousePosition = (position: Position) => {
  if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

const handleOnMove = (e: MouseEvent) => {
  const mousePosition: Position = { x: e.clientX, y: e.clientY };
  adjustLastMousePosition(mousePosition);

  const now = new Date().getTime();
  const hasMovedFarEnough =
      calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
  const hasBeenLongEnough =
      calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

  if (hasMovedFarEnough || hasBeenLongEnough) {
    createStar(mousePosition);
    updateLastStar(mousePosition);
  }

  createGlow(last.mousePosition, mousePosition);
  updateLastMousePosition(mousePosition);
};

onMounted(() => {
  window.addEventListener('mousemove', handleOnMove);
  // window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
  document.body.addEventListener('mouseleave', () =>
      updateLastMousePosition(originPosition)
  );
});
</script>
<template>

</template>

<style scoped>
:root {
  --glow-rgb: 239 42 201;
}

body {
  background: linear-gradient(145deg, rgb(119, 46, 195), rgb(58, 18, 153));
  height: 100vh;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.glow-point {
  position: absolute;
  box-shadow: 0rem 0rem 1.2rem 0.6rem rgb(var(--glow-rgb));
  pointer-events: none;
}

.star {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 1rem;
  animation-duration: 1500ms;
  animation-fill-mode: forwards;
  pointer-events: none;
}

@keyframes fall-1 {
  0% {
    transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25);
    opacity: 0;
  }

  5% {
    transform: translate(10px, -10px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1);
    opacity: 0;
  }
}

@keyframes fall-2 {
  0% {
    transform: translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(0.25);
    opacity: 0;
  }

  10% {
    transform: translate(-10px, -5px) rotateX(-20deg) rotateY(10deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25);
    opacity: 0;
  }
}

@keyframes fall-3 {
  0% {
    transform: translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5);
    opacity: 0;
  }

  15% {
    transform: translate(7px, 5px) rotateX(0deg) rotateY(45deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(0.5);
    opacity: 0;
  }
}
</style>