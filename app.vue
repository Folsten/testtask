<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useMainStore } from "~/stores/mainStore";

const mainStore = useMainStore();

const [users, posts, comments] = await Promise.all([
  $fetch("https://dummyjson.com/users?limit=0"),
  $fetch("https://dummyjson.com/posts?limit=0"),
  $fetch("https://dummyjson.com/comments?limit=0"),
]);

mainStore.users = users.users;
mainStore.posts = posts.posts;
mainStore.comments = comments.comments;
</script>
