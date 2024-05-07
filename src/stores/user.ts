import { ref } from "vue";

const userStore = () => {
  const user = ref<string | null>(null);

  return {
    user,
  };
};

export default userStore;
