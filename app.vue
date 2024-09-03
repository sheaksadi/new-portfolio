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

let modal = ref(false)
let sender = ref("")
let message = ref("")
let email = ref("")
let sending = ref(false)
const sendMessage = async () => {
  if (!sender.value || !message.value || !email.value) {
    alert("Please fill in all fields")
    return
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(email.value).toLowerCase())){
    alert("Please enter a valid email")
    return
  }
  sending.value = true
  const res = await useFetch('/api/mail', {
    method: "POST",
    body: {
      sender: sender.value,
      message: message.value,
      email: email.value
    }
  })
  // if (res.status.value === 200) {
  //
  // }else {
  //   sending.value = false
  //   alert("something went wrong")
  // }

  sending.value = false
  modal.value = false
  sender.value = ""
  message.value = ""
  email.value = ""
  // console.log(data)
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
            <Contacts @openModal="modal = true"/>
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

        <div
            @click="modal = false"
            class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300"
            :class="{ 'bg-black bg-opacity-50 backdrop-blur-sm': modal, 'opacity-0 pointer-events-none': !modal }"
        >
          <!-- Modal content -->
          <div
              @click.stop
              class="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg mx-4 transition-all duration-300 transform"
              :class="{ 'scale-100 opacity-100': modal, 'scale-95 opacity-0': !modal }"
          >
            <div class="p-6">
              <h2 class="text-2xl font-bold text-white mb-4">Get in Touch</h2>
              <form @submit.prevent="onSubmit" class="space-y-4">
                <div class="flex gap-4">
                  <div class="w-1/3">
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="sender"
                        class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                        placeholder="John Doe"
                    >
                  </div>
                  <div class="w-2/3">
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                        placeholder="john@example.com"
                    >
                  </div>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                      id="message"
                      v-model="message"
                      rows="4"
                      class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                      placeholder="Your message here..."
                  ></textarea>
                </div>
                <div class="flex items-center justify-end">
<!--                  <button type="button" class="text-blue-400 hover:text-blue-300 transition duration-200 flex items-center">-->
<!--                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>-->
<!--                    </svg>-->
<!--                    Attach file-->
<!--                  </button>-->
                  <button
                      type="submit"
                      :disabled="sending"
                      class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                      @click="sendMessage"
                  >
                    <span v-if="!sending">Send</span>
                    <svg v-else class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" fill="currentColor" />
                      <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
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
