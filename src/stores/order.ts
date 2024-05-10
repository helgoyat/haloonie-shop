import { ref, computed } from "vue";

const orderStore = () => {
  const boxes = ref<string[]>([]);

  const isOrder = computed(() => boxes.value.length > 0);

  const boxCount = computed(() => boxes.value.length);

  const addBox = (id: string): void => {
    boxes.value.push(id);
  };

  return {
    boxes,
    isOrder,
    boxCount,
    addBox,
  };
};

export default orderStore;
