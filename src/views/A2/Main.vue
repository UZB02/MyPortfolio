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
const data=[
    {
        name:"All Main Words",
        path:"/a2/mainwords",
        img:"https://avatars.mds.yandex.net/i?id=a48bd02edd38b69b43fbd6a2e41e60eb-4865680-images-thumbs&n=13"
    }
];
</script>
<style scoped>
</style>