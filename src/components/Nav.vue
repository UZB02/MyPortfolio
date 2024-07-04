<template>
  <nav
    class="bg-white dark:bg-gray-900 sticky w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 "
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="#"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../img/logo.jpg"
          class="md:h-10 h-8 rounded-full"
          alt="Logo"
        />
        <h1
          class="self-center :md:text-2xl text-3xl font-bold whitespace-nowrap dark:text-white"
          >MD</h1
        >
      </a>
      <div class="flex md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
      @click="toggleMenu"
      data-collapse-toggle="navbar-sticky"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-sticky"
      :aria-expanded="menu.toString()"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
      </div>
       <div
      class="items-center  transition ease-in-out justify-between w-full md:flex md:w-auto md:order-1"
      :class="{ hidden: !menu }"
      id="navbar-sticky"
    >
      <ul
        class="flex transition ease-in-out flex-col items-center justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <span
            @click="router.push('/')"
            class="block py-2 px-3 cursor-pointer text-white bg-lime-700 rounded md:bg-transparent md:text-lime-700 md:p-0 md:dark:text-lime-500"
            >Home</span
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >About</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Skills</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Projacts</a
          >
        </li>
        <li>
         <button
          type="button"
          @click="logout"
          class="text-white flex items-center justify-center gap-1 bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        >
          Contact
          
        </button>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>
<script setup>
import router from "@/router";
import {ref} from "vue";

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
<style scoped></style>
