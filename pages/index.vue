<template>
  <div class="container">
    <div class="post" v-for="post in postStore.posts" :key="post.id">
      <div class="post__title">{{ post.title }}</div>
      <div class="post__likes">likes - {{ post.reactions.likes }}</div>
      <div class="post__dislikes">dislikes - {{ post.reactions.dislikes }}</div>
      <div class="post__views"></div>
      <NuxtLink :to="'/posts/' + post.id" class="post__button">CLICK</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/postStore";

const postStore = usePostStore();
const { data } = await useFetch("https://dummyjson.com/posts");
postStore.posts = data.value.posts
console.log(postStore.posts)
// posts.value = data.value.posts;
// console.log(posts);
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.post {
  margin: 10px;
  display: flex;
  width: 33.3%;
  flex-direction: column;
}
</style>
