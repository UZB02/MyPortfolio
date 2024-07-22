<template>
        <section>
            <div class="container flex flex-wrap gap-5">
<div v-for="(item,index) in data" :key="index" @click="router.push(`${item.path}`)" class="card cursor-pointer w-full sm:w-[30%] h-48  flex flex-col items-end sm:mb-7 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span class="w-full h-full">
        <img :src="item.img" alt="" class="w-full transition ease-in-out hover:scale-95 h-full object-cover rounded-lg">
    </span>
    <span class="bg-gray-100 px-3 w-full rounded-lg">
        <h5 class="mb-2 text-2xl font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
    </span>
</div>

            </div>
        </section>
</template>
<script setup>
import router from '@/router';
import { ref } from 'vue';
import en_uz from "../../../json/A1+/en_uz.json";
const data=[
    {
        name:"Coutries",
        path:"/a1+/unit1/countries",
        img:"https://avatars.mds.yandex.net/i?id=df3edd4cb9f35c1964424e97e47dd9d375cc4c1d-5714596-images-thumbs&n=13"
    },
    {
        name:"Nationalities",
        path:"/a1+/unit1/nationalities",
        img:"https://avatars.mds.yandex.net/i?id=61e1ecc88bee8fb1d0b24aef668c71a6ca08a159-5709310-images-thumbs&n=13"
    },
    {
        name:"The Family",
        path:"/a1+/unit1/thefamily",
        img:"https://avatars.mds.yandex.net/i?id=742643c6e721352f994c459db52e38ea9646a9cfbb029c9e-12714984-images-thumbs&n=13"
    },
];
</script>
<style scoped>
</style>