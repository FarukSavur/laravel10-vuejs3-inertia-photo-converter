<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>
<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3"
  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#pablo"
        >
          Laravel 10, Vuejs 3 Photo Converter
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              target="_blank"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="https://github.com/FarukSavur/laravel10-vuejs3-inertia-photo-converter"
            >
              <i
                class="fa-brands fa-square-github text-lg leading-lg text-white opacity-75"
              ></i>
              <span class="ml-2">Github</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i
                class="fa-regular fa-share-from-square text-lg leading-lg text-white opacity-75"
              ></i>
              <span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="https://www.instagram.com/farukksavur/"
            >
              <i class="fab fa-instagram text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Instagram</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
