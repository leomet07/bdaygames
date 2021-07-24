import { writable } from "svelte/store";

export const triviaquestions = writable([]);
export const players = writable([]);
export const turn_index = writable(0);
