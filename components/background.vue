<script setup lang="ts">
let myCv = ref([
    {
        year: "2023 - Present",
        event: "University-Bachelors",
        description: "In 2023, To fulfill my quest of becoming a coding-wizard, I started my journey as a student of Computer Science and Engineering. I mean, what could be more thrilling than spending countless hours staring at lines of code and debugging errors that seem to magically appear out of nowhere?",
        title: "Studying Computer Science and Engineering",

    },
    {
        year: "2020 - 2022",
        event: "College-Pre-University",
        description: "In 2020, I started college. Of course, it was the middle of a global pandemic, So, all my classes were held online. Who needs human interaction anyway, right?\n" +
            "But in 2021, after the restrictions were lifted. Finally, I got see all my classmates in the flesh and was reminded that humans are, in fact, not just pixels on a screen.",
        title: "Studying Computer Science and Engineering",

    },
    {
        year: "2020",
        event: "Learning-to-Code",
        description: "In 2020 middle of Covid-19 pandemic, I found myself trapped at home with nothing to do. So, like any rational person, I decided to embark on a journey to learn the mystical art of coding. Maybe one day I'll invent the next Facebook or Google. Or maybe I'll just keep making silly little programs that bring a smile to people's faces. Either way, I'm having a blast!",
        title: "Studying Computer Science and Engineering",

    },
    {
        year: "2009 - 2020",
        event: "High School",
        description: "High school. It was some of the best years of my life. I made some great friends, and discovered my love for procrastination, and learned that the mitochondria are the powerhouse of the cell - because that's come in handy, like, never.",
        title: "Studying Computer Science and Engineering",

    },
])
let hoveringCard = ref(-1)
const cvClick = () => {
    alert('didnt make one yet !! ')
}
</script>

<template>
    <div class="flex flex-col gap-4 text-gray-400">
        <div
                v-for="(cv, index) in myCv"
                :key="index"
                class="relative flex rounded p-4 transition-all duration-300 group hover:bg-white hover:bg-opacity-10 hover:opacity-100 hover:shadow-xl"
                :class="{'opacity-10': hoveringCard !== index,
                'opacity-100': hoveringCard === -1
                } "
                @mouseenter="hoveringCard = index"
                @mouseleave="hoveringCard = -1"
        >
            <p class="basis-[20%]">{{ cv.year }}</p>
            <div class="basis-[80%]">
                <h3 class="text-lg font-semibold text-gray-300 group-hover:text-blue-500">{{ cv.event }}</h3>

                <p class="mt-2 group-hover:text-gray-300">{{ cv.description }}</p>
            </div>

        </div>
        <h1 @click="cvClick" class="cursor-pointer text-xl font-semibold text-gray-300 underline hover:text-purple-700">My full CV..</h1>
    </div>
</template>


<style scoped>

</style>
