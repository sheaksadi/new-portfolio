<script setup lang="ts">
import SectionHeader from "~/components/section-header.vue";
import Contacts from "~/components/contacts.vue";

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
  document.querySelectorAll(".section h2").forEach((section) => {
    observer.observe(section)
    console.log("section", section)
  });
})

const onSectionClick = (sectionId: string) => {
  // @ts-ignore
   const section = sectionRefs.value[sectionId];
   section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}
</script>
<template>
  <div class="h-screen w-full ">
    <div class="container mx-auto flex h-full w-full items-center justify-center gap-2 overflow-auto">
      <div class="flex h-full items-center w-[36rem] sticky top-0">
        <div class="flex w-full flex-col justify-between h-[32rem] sticky top-0">
          <div class="w-full text-gray-500">
            <h1 class="text-6xl font-bold text-white">SHEAK SADI</h1>
            <h2 class="text-2xl">Lorem ipsum dolor.</h2>
            <h2 class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor temporibus ullam
              vel?</h2>
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
      <div class="w-[36rem] h-full">

        <section class="section mt-28 bg-green-600" v-for="section in sections"  :key="section.id">
          <h2 :id="section.id" class="text-2xl font-bold text-white " :ref="(el) => (sectionRefs[section.id] = el)" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum eligendi fugit hic
            numquam pariatur quas ut! Aliquid, aperiam aut blanditiis debitis dicta doloremque enim error exercitationem
            expedita facere illum iste itaque laborum magni minus neque nihil nulla omnis placeat quam quas quibusdam
            reiciendis repellendus saepe sed sunt totam veniam. Accusamus adipisci aliquam aperiam architecto aspernatur
            beatae blanditiis consequatur, cum deserunt dolorem doloremque dolores ducimus eligendi explicabo fugiat id
            ipsum iure maiores maxime molestias necessitatibus nesciunt nisi officiis, optio placeat praesentium
            quaerat, reiciendis repellat sequi sit sunt tenetur ullam voluptatem. Dolores laudantium minus nam rerum. Ab
            aperiam asperiores, cumque cupiditate doloribus eum iure laudantium libero nemo nihil odit optio placeat
            quos rem sed totam veniam, voluptatum. Est, ex, id. Eaque eius maiores neque quibusdam quisquam repudiandae
            sed suscipit! A aliquid autem commodi corporis dolore ea earum eius esse, explicabo fugit id in inventore,
            ipsa laudantium magnam natus odio porro praesentium soluta temporibus! Enim ex laboriosam minima officia
            quidem rerum saepe vel? Adipisci architecto beatae consequatur et fugiat ipsum iste minus neque pariatur
            perferendis placeat possimus quis rerum sed similique, vitae, voluptas voluptate voluptatibus! Accusantium
            adipisci aliquid animi aperiam atque consectetur deserunt dolore doloremque dolores ea et eum expedita hic,
            id ipsam laborum laudantium magnam nam natus placeat porro, quas quia sit tempora, tempore totam ullam ut
            veritatis vero voluptatem? Amet eaque eligendi excepturi id ipsa iste modi molestiae mollitia nam nemo nihil
            obcaecati, placeat quaerat quasi reiciendis rem repellendus sint totam unde voluptate. Ab accusantium amet,
            at atque consectetur dolor ducimus eius eligendi ex iste iure necessitatibus neque nostrum obcaecati officia
            provident quisquam rem sed soluta suscipit tenetur unde velit veritatis voluptate voluptatem voluptatibus
            voluptatum! Beatae earum illum natus neque sequi! Dolorum molestias nam nostrum quam veniam. Doloribus eaque
            eius maxime pariatur sapiente! Ad amet inventore, modi obcaecati porro sed.</h2>
        </section>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background: rgb(51,65,85);
  background: radial-gradient(circle, rgba(51,65,85,1) 0%, rgba(15,23,42,1) 69%);
}
</style>
