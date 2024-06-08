<script setup lang="ts">
let projects = [
  {
    name: "Old Portfolio",
    description: "My first portfolio website was windows 10 inspired with movable windows, a working terminal and some of windows ui replicated. I made the website as a fun challenge. ",
    url: "https://v1.sadi.dev/",
    image: "https://i.imgur.com/07wyZCE.png",
    id: "charts",
    skills: [
      {
        name: "JavaScript",
        url: "https://www.javascript.com/"
      },
      {
        name: "Nuxt 3",
        url: "https://nuxt.com/"
      },
      {
        name: "Tailwind",
        url: "https://tailwindcss.com/"
      },
      {
        name: "Pinia",
        url: "https://pinia.vuejs.org/"
      },

    ],
  },
    {
        name: "Banglish to Bangla Translator",
        description: "I made a banglish to bangla translator that converts banglish text to bangla text. I made it as i couldn't find a banglish to bangla translator that works properly and consistantly. My Translator is best among the translators ive tried. ",
        url: "https://banglish.sadi.dev/",
        image: "https://imgur.com/5EachrV.png",
        id: "ai",
        skills: [
            {
                name: "JavaScript",
                url: "https://www.javascript.com/"
            },
            {
                name: "Open Ai Api",
                url: "https://openai.com/"
            },
            {
                name: "Nuxt 3",
                url: "https://nuxt.com/"
            },
            {
                name: "Tailwind",
                url: "https://tailwindcss.com/"
            }

        ],
    },
  {
    name: "Charts",
    description: "I did various dynamic custom charts to visualize data for work. Among various other projects at work.",
    url: "",
    image: "https://imgur.com/CVBFCCB.png",
    id: "charts",
    skills: [
      {
        name: "JavaScript",
        url: "https://www.javascript.com/"
      },
      {
        name: "Vue 2",
        url: "https://vuejs.org/"
      },
      {
        name: "echarts",
        url: "https://echarts.apache.org/"
      }


    ],
  },

  {
    name: "Discord bot",
    description: "I made few discord bots to manage discord servers. and a discord bot for my self that follows me when i join a audio call and plays lofi music automatically.",
    url: "",
    image: "https://i.imgur.com/2iEwt2R.png",
    id: "charts",
    skills: [
      {
        name: "JavaScript",
        url: "https://www.javascript.com/"
      },
      {
        name: "Discord.js",
        url: "https://discord.js.org/"
      },
      {
        name: "Youtube API",
        url: "https://developers.google.com/youtube/v3/"
      }

    ],
  },
  {
    name: "Minecraft Modding",
    description: "I started my coding journey by creating various mods and plugins for Minecraft. Few of my plugins are used by popular minecraft server Deadhorse.net.",
    url: "",
    image: "https://i.imgur.com/uf4NeoG.png",
    id: "minecraft-modding",
    skills: [
      {
        name: "Java",
        url: "https://www.java.com/en/"
      },
      {
        name: "Fabric",
        url: "https://fabricmc.net/"
      },
      {
        name: "Spigot",
        url: "https://www.spigotmc.org/"
      },
      {
        name: "Paper",
        url: "https://papermc.io/"
      }
    ],
  }
]
let hoveringCard = ref(-1)
const atCardClick = (url: any) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 text-gray-400">

    <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative flex rounded p-4 transition-all duration-300 group hover:bg-white hover:bg-opacity-10 hover:opacity-100 hover:shadow-xl"
        :class="{'opacity-10': hoveringCard !== index,
                'opacity-100': hoveringCard === -1,
                'cursor-pointer': project.url
                } "
        @mouseenter="hoveringCard = index"
        @mouseleave="hoveringCard = -1"
        @click="() => {atCardClick(project.url)}"
    >
      <div v-if="project.url" class="absolute top-0 right-2 hidden group-hover:block">
        <Icon name="mdi:link" class="text-xl"/>
      </div>
      <div class="p-2 pr-3 pl-0 basis-[20%]">
        <img :src="project.image" alt="project image">
      </div>
      <div class="basis-[80%]">
        <h3 class="text-lg font-semibold text-gray-300 group-hover:text-blue-500">{{ project.name }}</h3>

        <p class="mt-2 group-hover:text-gray-300">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2 ">
          <a
              v-for="(skill, index) in project.skills"
              :key="index"
              :href="skill.url"
              target="_blank"
              class="flex flex-nowrap items-center justify-center rounded bg-blue-500 bg-opacity-20 px-1 text-sm text-blue-500 group-hover:bg-opacity-10  hover:text-blue-200 md:px-4 md:py-1 md:text-base"
          >
            {{ skill.name }}
          </a>
        </div>
      </div>

    </div>
    <h1>Most of my projects are private or work projects</h1>
  </div>
</template>

<style scoped>

</style>
