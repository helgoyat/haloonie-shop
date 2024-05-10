import { ref, computed } from "vue";

const orderStore = () => {
  const boxes = ref<string[]>([]);

  const isOrder = computed(() => boxes.value.length > 0);

  const boxCount = computed(() => boxes.value.length);

  const addBox = (boxName: string): void => {
    boxes.value.push(boxName);
  };

  return {
    boxes,
    isOrder,
    boxCount,
    addBox,
  };
};

export default orderStore;
