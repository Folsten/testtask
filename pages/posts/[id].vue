<template>
  <div class="post">
    <div class="post__body">{{ postData.body }}</div>
    <div v-for="tag in postData.tags" class="post__tags">
      <div class="post__tag">
        {{ tag }}
      </div>
    </div>
  </div>
  <div class="comments">
    <div class="comment">
      <div class="comment__fullname">{{ comments.user.fullName }}</div>
      <div class="comment__body">{{ comments.body }}</div>
      <div class=""></div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/postStore";

let postData = ref([]);
let comments = ref([]);

const route = useRoute();
const postStore = usePostStore();
const postId = route.params.id;
const { data: dataPosts } = await useFetch(
  `https://dummyjson.com/posts/${postId}`
);
postData = dataPosts.value;
// console.log('postData', postData)
const { data: dataComments } = await useFetch(
  `https://dummyjson.com/comments/${postId}`
);
comments = dataComments.value;
console.log("comments", comments);
</script>

<style scoped>
.post {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.post__body {
  margin-bottom: 10px;
}

.post__tags {
  display: flex;
}

.post__tag {
  display: flex;
  flex-direction: column;
  margin: 0 5px 0 5px;
}

.comments {
  margin-top: 30px;
}

.comment {
  margin: 10px;
}
</style>
