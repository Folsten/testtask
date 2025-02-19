<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/postStore";

const postStore = usePostStore();
postStore.comments = await useFetch(`https://dummyjson.com/comments`);
console.log(postStore.comments);
</script>
