<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink to="/">Home</RouterLink>&nbsp;
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>
