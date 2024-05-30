<script setup lang="ts">
import moment from "moment/moment";

let myAge = computed(() => {
  let endDate = moment()
  return moment.duration(endDate.diff(moment("2003-8-6"))).asYears().toString().split(".")[0]
})
let year = computed(() => {
  let endDate = moment()
  return moment.duration(endDate.diff(moment("2020-1-1"))).asYears().toString().split(".")[0]
})
</script>

<template>
  <div class="text-gray-400 select-none text-lg">
    <!--    <h1 class="pt-2 text-4xl">Hi there, I'm Sheak Sadi</h1>-->
    <p class=" pb-6 relative">I'm an <span class="text-gray-200 group relative">{{ myAge }}
    <span class="absolute bg-slate-800 top-[-100%] left-[-100%] inline-block text-nowrap
                  rounded px-1 text-sm  group-hover:scale-100 scale-0
                   transition-all duration-100"
    >well its complicated</span>
    </span>-year-old self-taught Software Developer, now
      studying Computer Science and Engineering to become a coding wizard.

    </p>
    <p class=" pb-6">
      In 2020 I had bunch of time in my hand So like every other kid I was playing bunch of minecraft and other games.
      My passion for programming began with Minecraft modding, when I
      was helping
      a friend with plugins and mods for his server.
    </p>
    <p class="pb-6">Then I thought to myself, "Why stop at Minecraft?
      Let's
      conquer the entire internet!" So, I started my journey into the wild and wonderful world of web
      development.
      Now after almost {{ year }} years later I would say loved every part of this journey
      and looking forward to all the mystical adventures awaiting me
    </p>

    <p class=" pb-6">When I'm not coding, I enjoy swimming, playing badminton (emphasis on
      the 'bad') ,
      or I'll binge-watch some anime until my eyes turn into pixels.</p>
<!--      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta, doloribus. Aperiam earum eligendi fugit incidunt odit qui quo rem sapiente suscipit voluptatum. Consectetur, cum cupiditate debitis dicta doloremque dolorum esse fugiat illum magnam maxime, minima molestiae nobis numquam perspiciatis suscipit tempore temporibus. Amet dignissimos eaque iure maxime minus nam officia quisquam sapiente. Ad autem consequuntur, cumque debitis deleniti dolor esse est ex facilis harum incidunt iusto laboriosam laborum necessitatibus numquam pariatur perspiciatis praesentium quidem quisquam ratione recusandae sapiente tempora velit voluptas voluptatem. A adipisci alias aliquid assumenda at blanditiis commodi dicta dolores eos est eveniet inventore libero magnam mollitia nemo neque, numquam quis quod quos temporibus ullam unde vel velit voluptas voluptatum. Aut, beatae commodi corporis dolorem eaque facere iste laboriosam molestiae molestias officiis pariatur rerum sint soluta totam ut vero vitae voluptas! Animi id incidunt ipsum necessitatibus nemo, neque quia quisquam quo. A, adipisci aperiam cum dolore dolores, doloribus expedita, fuga ipsam officia possimus recusandae rem velit veritatis voluptate voluptatum? Aliquid animi blanditiis consectetur deserunt doloremque hic maiores nam, nesciunt nostrum perspiciatis quidem quod repellat, reprehenderit tempora voluptas! Accusantium aliquid aperiam architecto aut consequuntur cumque delectus expedita facere, labore maiores nam quisquam recusandae reiciendis repudiandae tempore totam unde voluptate? Ab accusantium alias at aut, dicta eaque error excepturi in inventore nemo pariatur quae qui quia quisquam repellendus sequi sit tempore, velit vero voluptas! Dolore, fuga velit? Aspernatur fugit illum ipsa nam omnis perferendis saepe suscipit. Ab aliquid, architecto asperiores earum eius eos error ex explicabo fugit harum optio quaerat quod reiciendis tenetur ullam? At commodi deserunt ipsum magni possimus suscipit veritatis! Assumenda atque beatae dignissimos esse facere numquam qui sapiente suscipit. Adipisci alias amet consectetur cumque deleniti dolore ea iste modi mollitia, neque nisi odit omnis optio possimus quidem rerum suscipit tempore ullam veniam voluptas. Animi, corporis dolore ea expedita in incidunt natus nulla odit quia recusandae sed soluta voluptas voluptates. A accusantium adipisci consectetur cumque deserunt dignissimos excepturi facere ipsum labore libero minus, placeat quia, rerum similique totam ullam velit! Assumenda beatae consequatur deserunt distinctio dolor eveniet nemo neque nesciunt numquam obcaecati, odio, officia quod repellendus rerum sed temporibus voluptas? Alias animi aperiam dolorum est illum iure, quam veritatis! Atque beatae cum doloribus libero, molestias quibusdam similique! Alias autem debitis, dolorem excepturi quisquam quo voluptatem. Adipisci laudantium natus nihil nisi quisquam rem tempore! Ab autem consectetur doloribus esse ipsa, itaque officia officiis praesentium quas quibusdam, repellendus reprehenderit!</p>-->
  </div>
</template>

<style scoped>

</style>
