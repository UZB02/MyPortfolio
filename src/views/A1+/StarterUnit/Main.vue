<template>
        <section>
            <div class="container flex flex-wrap gap-3">
<div @click="router.push('/a1+/starter_unit/classroom')" class="card cursor-pointer w-full sm:w-[30%] h-48 flex items-end  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span class="bg-gray-100 px-3 w-full">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Classroom</h5>
    </span>
</div>
<div @click="router.push('/a1+/starter_unit/classroom')" class="card cursor-pointer w-full sm:w-[30%] h-48 flex items-end  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span class="bg-gray-100 px-3 w-full">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Classroom</h5>
    </span>
</div>
<div @click="router.push('/a1+/starter_unit/classroom')" class="card cursor-pointer w-full sm:w-[30%] h-48 flex items-end  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span class="bg-gray-100 px-3 w-full">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Classroom</h5>
    </span>
</div>
            </div>
        </section>
</template>
<script setup>
import router from '@/router';
</script>
<style scoped>
.card{
    background: url(https://avatars.mds.yandex.net/i?id=9bb27c302f848b802354b706f788441496f105f7-5383525-images-thumbs&n=13);
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>