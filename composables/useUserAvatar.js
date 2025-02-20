import { useMainStore } from "~/stores/mainStore";

export const useUserAvatar = () => {
  const mainStore = useMainStore();

  const getUserAvatar = (userId) => {
    if (mainStore.users[userId]) {
      return mainStore.users[userId].image;
    }
    return null;
  };

  return {
    getUserAvatar,
  };
};
