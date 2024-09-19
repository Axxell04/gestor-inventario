import { writable } from "svelte/store";

export const modalVisible = writable<string|null>(null);