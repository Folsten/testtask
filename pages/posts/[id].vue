<template>
  <section class="container">
    <div class="post">
      <UAvatar
        class="post__avatar"
        size="3xl"
        :src="getUserAvatar(post.userId - 1)"
        alt="Avatar"
      />
      <span class="post__title">{{ post.title }}</span>
      <span class="post__views">Views: {{ post.views }}</span>
      <span class="post__likes">Likes: {{ post.reactions.likes }}</span>
      <span class="post__dislikes"
        >Dislikes: {{ post.reactions.dislikes }}</span
      >
      <div class="post__tags">
        <div v-for="tag in post.tags" class="post__tag">
          <UBadge :ui="{ rounded: 'rounded-full' }">{{ tag }}</UBadge>
        </div>
      </div>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <UDivider class="divider" label="Comments" size="sm" />
    <div class="comments">
      <div v-for="comment in comments" class="comment">
        <div class="comment__row">
          <div class="comment__col">
            <UAvatar
              class="comment__avatar"
              size="3xl"
              :src="getUserAvatar(comment.user.id - 1)"
              alt="Avatar"
            />
          </div>
          <div class="comment__col">
            <div class="comment__fullName">{{ comment.user.fullName }}</div>
            <div class="comment__email">
              {{ getUser(comment.user.id - 1).email }}
            </div>
            <div class="comment__text">{{ comment.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from "~/stores/mainStore";
import { useUserAvatar } from "~/composables/useUserAvatar";

const mainStore = useMainStore();
const { getUserAvatar } = useUserAvatar();

const route = useRoute();
const postId = route.params.id;
const post = mainStore.posts[postId - 1];
const getUser = (userId) => mainStore.users[userId];

const { comments } = await $fetch(
  `https://dummyjson.com/comments/post/${postId}`
);
console.log(comments);
</script>

<style scoped>
.container {
  margin: 30px;
}

.post {
  display: flex;
  flex-direction: column;
}

.post__avatar {
  margin-bottom: 10px;
}

.post__body {
  margin-top: 10px;
  font-style: italic;
}

.post__tags {
  display: flex;
  margin-top: 10px;
}

.post__tag {
  margin: 0px 6px 0 6px;

  &:first-child {
    margin-left: 0;
  }
}

.divider {
  margin: 20px 0 20px 0;
}

.comment {
  margin-top: 20px;
}

.comment__row {
  display: flex;
}

.comment__col {
  display: flex;
  flex-direction: column;
}

.comment__col:first-child {
  margin-right: 10px;
}

.comment__col:last-child {
  margin-left: 10px;
}

.comment__fullName {
  font-weight: bold;
}

.comment__email {
  color: blue;
}

.comment__text {
  margin-top: 5px;
}
</style>
