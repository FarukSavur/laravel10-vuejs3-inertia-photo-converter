<script setup>
import Navbar from "@/Layout/components/Header.vue";
import Footer from "@/Layout/components/Footer.vue";
</script>
<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>
