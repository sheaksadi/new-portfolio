<script setup lang="ts">
import SectionHeader from "~/components/section-header.vue";
import Contacts from "~/components/contacts.vue";
// @ts-ignore
import About from "~/components/about.vue";
// @ts-ignore
import Education from "~/components/background.vue";
// @ts-ignore
import Projects from "~/components/projects.vue";
// @ts-ignore


const sections = [
  {
    title: "About",
    id: "about",
    ref: null,
    component: About
  },
  {
    title: "Background",
    id: "background",
    ref: null,
    component: Education
  },
  {
    title: "Projects",
    id: "projects",
    ref: null,
    component: Projects
  }
]
let sectionRefs = ref({});


let highlightedSections = ref([]);
let selectedSection = ref("");
const blob = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              if (!scrolling.value) {
                  selectedSection.value = entry.target.id
              }

          }
        })
      },
      {
          "rootMargin": "-20% 0% -40% 0%",

      })
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section)
    console.log("section", section)
  });


  const animateBlob = (clientX: number, clientY: number) => {
    // @ts-ignore
    blob?.value?.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
  }

  window.onpointermove = (e) => {
    animateBlob(e.clientX, e.clientY)
  };
  window.ontouchstart = (e) => {
    console.log("touch", e)
    if (e.changedTouches.length > 0)
      animateBlob(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  };
})
let scrolling = ref(false)
const onSectionClick = (sectionId: string) => {
    scrolling.value = true
  const section = sectionRefs.value[sectionId];
  section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
    // @ts-ignore
    selectedSection.value = sectionId

  navigateTo("/#" + sectionId)
  setTimeout(() => {
    scrolling.value = false
  },100)
}
</script>
<template>
  <div class="h-screen w-full overflow-y-auto" style="scrollbar-width: thin">
    <div class="min-h-screen w-full px-4 lg:container lg:mx-auto lg:px-36">
      <div class="flex h-full w-full flex-col lg:flex-row">
        <div class="flex w-full flex-col justify-between p-4 pt-28 h-[36rem] lg:h-[50rem] lg:sticky lg:top-0 lg:py-28">
          <div class="text-gray-500">
            <h1 class="cursor-pointer text-5xl font-bold text-gray-200 md:text-6xl" @click="() => onSectionClick('about')">Sheak Sadi</h1>
            <h2 class="mt-2 text-xl text-gray-400 md:text-2xl">Software Developer</h2>
            <h2 class="mt-2 transition-all duration-500">
              Currently working part time at
              <br class=""/>
              <a
                  class="hover:text-gray-300"
                  href="https://www.netpoint-media.de/"
                  target="_blank"
              >Netpoint Media GmbH</a>
            </h2>
          </div>
          <div class="mb-4">
            <SectionHeader
                v-for="section in sections"
                :key="section.id"
                :title="section.title"
                :selected="highlightedSections.includes(section.id) || selectedSection === section.id"
                @mouseover="highlightedSections.push(section.id)"
                @mouseleave="highlightedSections = highlightedSections.filter(item => item !== section.id)"
                :id="section.id"
                @mousedown="onSectionClick(section.id)"

            />
          </div>
          <div class="flex gap-2">
            <Contacts/>
          </div>
        </div>
        <div class="h-full w-full pt-28">
          <section
              class="mb-28 section md:scroll-mt-28"
              :id="section.id"
              v-for="section in sections"
              :key="section.id"
              :ref="(el) => (sectionRefs[section.id] = el)"
          >
              <div class="lg:hidden">
                <h1 class="text-3xl font-bold mb-4 text-blue-300 lg:hidden">{{ section.title }}</h1>
              </div>
            <component :is="section.component"/>
          </section>
          <footer class="mb-28 text-sm text-gray-600">
              This website was made using <a class="text-gray-500 hover:text-gray-300" href="https://nuxtjs.org/" target="_blank" >Nuxt</a>
              and <a class="text-gray-500 hover:text-gray-300" href="https://tailwindcss.com/" target="_blank">Tailwind</a>, and hosted on <a class="text-gray-500 hover:text-gray-300" href="https://vercel.com/" target="_blank">Vercel</a>.
              Website code is available on <a class="text-gray-500 hover:text-gray-300" href="https://github.com/sheaksadi/new-portfolio" target="_blank">Github</a>.
          </footer>
        </div>


      </div>
      <div ref="blob" id="blob"></div>
      <div id="blur"></div>
    </div>

  </div>

  <NuxtPage />
</template>
<style>
html body {
  @apply bg-background;
  scrollbar-width: thin;
  overflow: hidden;
  height: 100dvh;
    font-family: "Akkurat LL", serif;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

#blob {
  height: 34vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 30%;
  top: 30%;
  translate: -50% -50%;
  border-radius: 50%;
  background: white linear-gradient(to right, #02094f, #460246);
  animation: rotate 20s infinite;
  opacity: 0.8;
  z-index: -3;
}

#blur {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -2;
  backdrop-filter: blur(12vmax);
}


</style>
