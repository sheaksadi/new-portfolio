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
  if (url){
    window.open(url, '_blank')
  }
}
</script>

<template>
    <div class="flex flex-col gap-4 text-gray-400 select-none ">

        <div
                v-for="(project, index) in projects"
                :key="index"
                class="p-4 flex hover:bg-gray-700 hover:bg-opacity-40 hover:opacity-100 group transition-all duration-300 rounded relative"
                :class="{'opacity-10': hoveringCard !== index,
                'opacity-100': hoveringCard === -1
                } "
                @mouseenter="hoveringCard = index"
                @mouseleave="hoveringCard = -1"
                @click="() => {atCardClick(project.url)}"
        >
            <div v-if="project.url" class="absolute top-0 right-2 hidden group-hover:block">
                <Icon name="mdi:link" class="text-xl"/>
            </div>
            <div class="basis-[20%] p-2 pl-0 pr-3">
                <img :src="project.image" alt="project image">
            </div>
            <div class="basis-[80%]">
                <h3 class="text-lg font-semibold group-hover:text-purple-700 text-gray-300">{{ project.name }}</h3>

                <p class="mt-2 group-hover:text-white">{{ project.description }}</p>
                <div class="flex gap-2">
                    <a
                        v-for="(skill, index) in project.skills"
                        :key="index"
                        :href="skill.url"
                        target="_blank"
                        class="text-purple-500 hover:text-gray-200 px-4 py-1 rounded bg-purple-400 bg-opacity-20 mt-4 flex justify-center items-center"
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
