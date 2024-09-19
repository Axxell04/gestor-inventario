<script lang="ts">
  import { refresh_products } from "$lib/functions/db_functions";
  import { db } from "../../../../routes/globalStores";
  import { modalVisible } from "../stores";

    let name = "";
    let price = 0;
    let quantity = 0;

    let alertName = false;
    let alertPrice = false;
    let alertQuantity = false;

    function updateName (e: Event) {
        let target = e.target as HTMLInputElement;
        let value = target.value;
        if (typeof value === "string") {
            name = value;
            alertName = false;
        }
    }
    function updatePrice (e: Event) {
        let target = e.target as HTMLInputElement;
        let value = parseFloat(target.value);
        if (typeof value === "number") {
            price = value;
            alertPrice = false;
        }
    }
    function updateQuantity (e: Event) {
        let target = e.target as HTMLInputElement;
        let value = parseInt(target.value);
        if (typeof value === "number") {
            quantity = value;
            alertQuantity = false;
        }
    }
    async function addProduct () {
        if (!name) {alertName = true}
        if (!price ) {alertPrice = true}
        if (!quantity) {alertQuantity = true}
        if (alertName || alertPrice || alertQuantity) {return}

        const res = await $db.execute("INSERT INTO product (name, price, quantity) VALUES ($1, $2, $3)", [name, price, quantity])

        console.log(res)
        name = "";
        price = 0;
        quantity = 0;

        await refresh_products()
        modalVisible.set(null)
    }
</script>

<button class="flex flex-col gap-1 border place-items-center bg-zinc-900 p-3 cursor-auto rounded-xl" on:click={e=>e.stopPropagation()}>
    <h2 class="font-medium border-b px-2 pb-1 mb-1">Añadir Producto</h2>
    <span>Nombre</span>
    <input class="{alertName ? 'bg-red-300' : 'bg-slate-50/60'} outline-none text-center text-zinc-900 rounded-md" type="text" on:input={e=>updateName(e)} value={name}>
    <span>Precio</span>
    <input class="{alertPrice ? 'bg-red-300' : 'bg-slate-50/60'} outline-none text-center text-zinc-900 rounded-md" type="number" on:input={e=>updatePrice(e)} value={price}>
    <span>Cantidad</span>
    <input class="{alertQuantity ? 'bg-red-300' : 'bg-slate-50/60'} outline-none text-center text-zinc-900 rounded-md" type="number" on:input={e=>updateQuantity(e)} value={quantity}>
    <button class="border rounded-md mt-1 py-1 px-2 hover:text-zinc-900 hover:bg-slate-50" on:click={addProduct}>Añadir</button>
</button>

<style lang="postcss">
    /* input {
        outline: none;
        background-color: theme(colors.slate.50/0.6);
        color: theme(colors.zinc.900);
        text-align: center;
        border-radius: theme(borderRadius.md);
    } */
</style>