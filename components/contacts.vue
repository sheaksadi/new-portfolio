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
  <a
      :href="contact.url"
      target="_blank"
      v-for="contact in contacts"
      :key="contact.id"
      class="relative flex h-full w-12 items-center justify-center group">
    <Icon :name="contact.icon"  class="h-8 w-8 text-gray-400 transition-all duration-200 group-hover:text-white"  />
<!--    <span class="absolute scale-0 rounded bg-purple-600 p-1 text-white transition-all duration-100 bottom-[-3rem] group-hover:scale-100">{{contact.siteUserName}}</span>-->
  </a>
</template>

<style scoped>

</style>
