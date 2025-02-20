<template>
  <div class="container">
    <div class="post" v-for="post in paginatedPosts" :key="post.id">
      <UAvatar
        class="post__avatar"
        size="3xl"
        :src="getUserAvatar(post.userId - 1)"
        alt="Avatar"
      />
      <div class="post__title">{{ post.title }}</div>
      <div class="post__views">Views: {{ post.views }}</div>
      <div class="post__likes">Likes: {{ post.reactions.likes }}</div>
      <div class="post__dislikes">Dislikes: {{ post.reactions.dislikes }}</div>
      <NuxtLink :to="`/posts/${post.id}`" class="post__button"
        ><UButton>Open full</UButton></NuxtLink
      >
    </div>
  </div>
  <UPagination
    class="pagination"
    v-model="page"
    :page-count="6"
    :total="mainStore.posts.length"
  />
</template>

<script setup>
import { useMainStore } from "~/stores/mainStore";
import { useUserAvatar } from "~/composables/useUserAvatar";

const mainStore = useMainStore();
const { getUserAvatar } = useUserAvatar();

const page = ref(1);
const postsPerPage = 6;

const paginatedPosts = computed(() => {
  const start = (page.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return mainStore.posts.slice(start, end);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

.post {
  margin: 10px;
  display: flex;
  width: 33.3%;
  flex-direction: column;
}

.post__avatar {
  margin-bottom: 5px;
}

.post__button {
  margin-top: 10px;
}

.pagination {
  margin: 30px 20px 30px 20px;
}
</style>
