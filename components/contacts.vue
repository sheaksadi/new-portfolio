<script setup lang="ts">
const contacts  = [
  {
    title: "Github",
    icon: "mdi:github",
    id: "github",
    url: "https://github.com/sheaksadi",
    siteUserName: "sheaksadi",
    newWindow: true,
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    id: "linkedin",
    url: "https://www.linkedin.com/in/sheaksadi/",
    siteUserName: "sheaksadi",
    newWindow: true,
  },
  {
    title: "Email",
    icon: "ic:outline-email",
    id: "email",
    url: "mailto:sheaksadi12345@gmail.com",
    siteUserName: "sheaksadi",
    newWindow: false,
  },
  {
    title: "Discord",
    icon: "ic:outline-discord",
    id: "discord",
    url: "https://discord.com/users/446224188592881665",
    siteUserName: "@sheaksadi",
    newWindow: true,
  },
  {
    title: "Twitter",
    icon: "pajamas:twitter",
    id: "twitter",
    url: "https://twitter.com/sheaksadi",
    siteUserName: "sheaksadi",
    newWindow: true,
  },

]
function atBtnClick(contact: { newWindow: any; url: string; }) {
  if (contact.newWindow) {
    window.open(contact.url, "_blank")
  } else {
    window.open(contact.url)
  }

}
</script>

<template>
  <button
      @click="atBtnClick(contact)"
      v-for="contact in contacts"
      :key="contact.id"
      class="h-full w-12 flex justify-center items-center group relative">
    <Icon :name="contact.icon"  class="w-8 h-8 text-gray-400 group-hover:text-white transition-all duration-200"  />
    <span class="scale-0 group-hover:scale-100 transition-all duration-100 absolute bottom-[-3rem] text-white bg-purple-600 rounded p-1">{{contact.siteUserName}}</span>
  </button>
</template>

<style scoped>

</style>