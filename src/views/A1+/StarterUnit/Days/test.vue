<template>
  <section>
    <div class="container flex flex-col gap-5">
      <span class="h-[150px] sm:h-[50vh] bg-gray-100 rounded-lg flex items-center justify-center">
        <h1 class="font-sans font-bold text-3xl">{{ currentWord }}</h1>
      </span>
      <span class="flex items-center justify-center sm:flex-row flex-col gap-3">
        <input v-model="answer" type="text" id="default-search" class="block w-full sm:w-1/2 font-bold p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter word" required />
        <div class="flex gap-3">
          <button @click="checkWord" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tekshirish</button>
          <button @click="generateRandomIndex" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Yangilash</button>
        </div>
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import en_uz from '../../../../json/A1+/en_uz.json';
import Swal from 'sweetalert2';

const data = ref(en_uz[0].Satart_Unit.description.days);

const answer = ref("");
const random = ref(0);
const Values = Object.values(data.value);
const Keys = Object.keys(data.value);
const currentKey = ref(Keys[random.value]);
const currentWord = ref(Values[random.value]);

const checkWord = () => {
  if (answer.value.trim().toLocaleLowerCase() === currentKey.value.toLocaleLowerCase()) {
    console.log('Correct');
   Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Correct answer",
  showConfirmButton: false,
  timer: 1500
});
answer.value = "";
  generateRandomIndex();
  } else {
    Swal.fire({
  title: 'Error!',
  text: `Wrong. Correct answer is ${currentKey.value}`,
  icon: 'error',
  confirmButtonText: 'Cool'
})
    console.log();
  }
};

const generateRandomIndex = () => {
  random.value = Math.floor(Math.random() * Values.length);
  currentWord.value = Values[random.value];
  currentKey.value = Keys[random.value];
  answer.value = "";
};

generateRandomIndex(); // Boshlang'ich random qiymatni o'rnatish

console.log(random.value);
console.log(data.value);
</script>

<style scoped>
/* Stilingiz shu yerga yozing */
</style>