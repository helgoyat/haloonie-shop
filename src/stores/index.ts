import { defineStore } from "pinia";
import userStore from "./user";

export const useUserStore = defineStore("user", userStore);
