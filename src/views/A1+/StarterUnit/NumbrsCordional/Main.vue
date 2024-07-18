<template>
    <section>
        <div class="container flex flex-col gap-5">
            <header class="flex items-center justify-between">
                <div class="container flex items-center flex-wrap justify-center sm:justify-between gap-3">
                    <h1 class="font-sans font-bold text-3xl">Numbers Cordional</h1>
                    <span class="flex flex-wrap items-center justify-center gap-3">                
<form class="max-w-md mx-auto">   
    <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input v-model="searchValue" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search dictionary" required />
    </div>
</form>
                        <button @click="router.push('/a1+/starter_unit/numbers_cardinal/test')" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start Test</button>
                    </span>
                </div>
            </header>
            <main class="flex flex-wrap items-center gap-3">
                       <div v-for="(item, key) in search" :key="key" class="card bg-slate-400 p-2 rounded-lg text-white flex items-center gap-2">
             <div class="left">
                <h1 class="font-sans font-bold text-sm md:text-xl">{{ key }}</h1>
            </div>
            <svg clip-rule="evenodd" width="24" fill="#fff" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1zm1.5-4.498v-3.008l4.751 4.507-4.751 4.507v-3.008h-10.022v-2.998z" fill-rule="nonzero"/></svg>
            <div class="right">
                <h1 class="font-sans font-bold text-sm md:text-xl">{{ item }}</h1>
            </div>
       </div>
            </main>
        </div>
    </section>
</template>
<script setup>
import router from '@/router';
import en_uz from "../../../../json/A1+/en_uz.json";
import { ref,reactive,computed } from 'vue';
const data=ref(en_uz[0].Satart_Unit.description.numbers_cardinal);

const searchValue=ref("");
console.log(searchValue.value);

const search=computed(()=>{
    if(!searchValue.value){
        return data.value
    }else{
         return Object.keys(data.value)
        .filter(key => key.toLowerCase().includes(searchValue.value.toLowerCase()) ||
            data.value[key].toLowerCase().includes(searchValue.value.toLowerCase()))
        .reduce((res, key) => {
            res[key] = data.value[key];
            return res;
        }, {});
    }
})

</script>
<style scoped>
    
</style>