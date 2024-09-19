import { get } from "svelte/store";
import { costs, db, products, sales } from "../../routes/globalStores";
import type { product } from "$lib/interfaces/products";
import type { cost } from "$lib/interfaces/costs";
import type { sale } from "$lib/interfaces/sales";

export async function initDB () {
    await get(db).execute("CREATE TABLE IF NOT EXISTS product (cod INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50), price REAL, quantity SMALLINT)")
    await get(db).execute("CREATE TABLE IF NOT EXISTS cost (id INTEGER PRIMARY KEY AUTOINCREMENT, value REAL)")
    await get(db).execute("CREATE TABLE IF NOT EXISTS sale (id INTEGER PRIMARY KEY AUTOINCREMENT, value REAL)")
}


// PRODUCTS

export async function get_products () {
    let products: Array<product>;
    products = await get(db).select("SELECT * FROM product");

    return products;
}

export async function refresh_products () {
    products.set(await get_products());
}

// COSTS

export async function get_costs () {
    let costs: Array<cost>;
    costs = await get(db).select("SELECT * FROM cost");

    return costs;
}

export async function refresh_costs () {
    costs.set(await get_costs());
}

// SALES

export async function get_sales () {
    let sales: Array<sale>;
    sales = await get(db).select("SELECT * FROM sale");

    return sales;
}

export async function refresh_sales () {
    sales.set(await get_sales());
}