import { ref } from "vue";
import { IBox } from "@/types";

const rootStore = () => {
  const box = ref<IBox | null>(null);

  const setBox = (val: IBox | null): void => {
    box.value = val;
  };

  return {
    box,
    setBox,
  };
};

export default rootStore;
