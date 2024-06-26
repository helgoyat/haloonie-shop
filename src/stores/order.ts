import { IBox } from "@/types";
import { ref, computed } from "vue";
import { Boxes, MaxBoxCount } from "@/data";

const orderStore = () => {
  const boxIds = ref<Record<string, number>>({});

  const isOrder = computed((): boolean => [...Object.keys(boxIds.value)].length > 0);

  const boxCount = computed((): number =>
    Object.values(boxIds.value).reduce((total, curr) => total + curr, 0),
  );

  const isMaxBoxCount = computed((): boolean => boxCount.value >= MaxBoxCount);

  const boxes = computed((): IBox[] => {
    return Object.keys(boxIds.value)
      .map((id) => Boxes.find((item) => item.id === id) || null)
      .filter((e) => !!e) as IBox[];
  });

  const addBox = (id: string): void => {
    const isBox = Object.keys(boxIds.value).includes(id);
    if (isMaxBoxCount.value) return;
    if (isBox) {
      boxIds.value[id] += 1;
    } else {
      boxIds.value[id] = 1;
    }
  };

  const removeBox = (id: string): void => {
    const isBox = Object.keys(boxIds.value).includes(id);
    if (boxIds.value[id] === 1) return;
    if (isBox) {
      boxIds.value[id] -= 1;
    }
  };

  const deleteBox = (id: string): void => {
    const isBox = Object.keys(boxIds.value).includes(id);
    if (isBox) {
      delete boxIds.value[id];
    }
  };

  return {
    boxIds,
    isOrder,
    boxCount,
    isMaxBoxCount,
    boxes,
    addBox,
    removeBox,
    deleteBox,
  };
};

export default orderStore;
