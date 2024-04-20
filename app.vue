<script setup lang="ts">
import SectionHeader from "~/components/section-header.vue";
import Contacts from "~/components/contacts.vue";
import About from "~/components/about.vue";

const sections = [
  {
    title: "About",
    id: "about",
    ref: null
  },
  {
    title: "Projects",
    id: "projects",
    ref: null
  },
  {
    title: "Contact",
    id: "contact",
    ref: null
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
            selectedSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: "0px 0px -90% 0px",
      })
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section)
    console.log("section", section)
  });


  const animateBlob = ( clientX: number, clientY: number ) => {
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

const onSectionClick = (sectionId: string) => {
  // @ts-ignore
  const section = sectionRefs.value[sectionId];

  section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })

}
</script>
<template>
  <div class="h-screen w-full ">


    <div class="container mx-auto flex flex-col sm:flex-row h-full w-full items-center justify-center gap-2 overflow-auto">
      <div class="flex h-full items-center w-[34rem] sticky top-0">
        <div class="flex w-full flex-col justify-between h-[32rem] ">
          <div class="w-full text-gray-500 select-none">
            <h1 class="text-6xl font-bold text-gray-200">Sheak Sadi</h1>
            <h2 class="text-2xl mt-3 text-gray-400">Software Developer</h2>
            <h2 class=" mt-3 ">Currently working part time at <br><a class="hover:text-gray-300" href="https://www.netpoint-media.de/">Net Point Media GMBH</a></h2>
          </div>
          <div class="w-full ">
            <SectionHeader
                v-for="section in sections"
                key="section.id"
                :title="section.title"
                :selected="highlightedSections.includes(section.id) || selectedSection === section.id"
                @mouseover=" highlightedSections.push(section.id); "
                @mouseleave=" highlightedSections = highlightedSections.filter(item => item !== section.id); "
                :id="section.id"
                @click="onSectionClick(section.id)"
            ></SectionHeader>
          </div>
          <div class="h-10 w-full  flex  gap-2">
            <Contacts></Contacts>
          </div>

        </div>

      </div>
      <div class=" flex flex-col max-h-full">
        <div class="w-[36rem]  section my-2" :id="section.id" v-for="section in sections" :key="section.id" :ref="(el) => (sectionRefs[section.id] = el)">
          <div class="h-screen flex justify-center items-center">
            <About></About>
          </div>


        </div>
      </div>

    </div>
    <div ref="blob" id="blob"></div>
    <div id="blur"></div>
  </div>
</template>
<style>
body {
  background: rgb(51, 65, 85);
  background: radial-gradient(circle, rgba(51, 65, 85, 1) 0%, rgba(15, 23, 42, 1) 69%);
  overflow: hidden;
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
  position: absolute;
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
