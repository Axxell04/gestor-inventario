import type { cost } from "$lib/interfaces/costs";
import type { product } from "$lib/interfaces/products";
import type { sale } from "$lib/interfaces/sales";
import Database from "@tauri-apps/plugin-sql";
import { readable, writable } from "svelte/store";


export const db = readable(await Database.load("sqlite:test.db"));

export const products = writable<product[]>([]);
export const costs = writable<cost[]>([]);
export const sales = writable<sale[]>([]);