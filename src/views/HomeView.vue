<script setup>
// import Nav from "../components/Nav.vue";
import A1 from "../views/A1+/Main.vue";

import { ref } from "vue";

const sideBar = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50">
        <!-- <Nav></Nav> -->
  </header>
<main>
  <A1></A1>
</main>
</template>
