import { defineStore } from "pinia";
import rootStore from "./root";
import userStore from "./user";
import orderStore from "./order";

export const useRootStore = defineStore("root", rootStore);
export const useUserStore = defineStore("user", userStore);
export const useOrderStore = defineStore("order", orderStore);
