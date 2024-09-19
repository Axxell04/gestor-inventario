<script lang="ts">
  import { refresh_products } from "$lib/functions/db_functions";
  import { db, products } from "../../../../routes/globalStores";

  import { modalVisible } from "../stores";

  //   import window from "@tauri-apps/api";
  let productsSelected = new Set<number>();

  function selectThis(e: Event) {
    const target = e.target as HTMLButtonElement;
    let codProduct = target.dataset["cod_product"];
    if (codProduct) {
      let cod = parseInt(codProduct);
      if (!productsSelected.has(cod)) {
        productsSelected = new Set([...productsSelected, cod]);
      } else {
        productsSelected.delete(cod);
        productsSelected = new Set([...productsSelected]);
      }
    }
  }

  async function remove_products() {
    let params = Array.from(productsSelected);
    if (!params.length) {
      return;
    }
    let $n = "";
    params.forEach((param) => {
      if (!$n) {
        $n += `$${params.indexOf(param) + 1}`;
      } else {
        $n += `,$${params.indexOf(param) + 1}`;
      }
    });
    let query = `DELETE FROM product WHERE cod IN (${$n})`;

    const res = await $db.execute(query, params);
    console.log(res);
    refresh_products();
    modalVisible.set(null);
  }
</script>

<button
  class="flex flex-col gap-2 border place-items-center bg-zinc-900 p-3 cursor-auto rounded-xl max-h-80"
  on:click={(e) => e.stopPropagation()}
>
  <h2 class="font-medium px-2 pb-1 mb-1">Remover Producto</h2>
  <div
    class="flex flex-col place-items-center border flex-grow w-40 overflow-y-auto rounded-md"
  >
    {#each $products as product}
      <button
        data-cod_product={product.cod}
        on:click={(e) => selectThis(e)}
        class="w-full p-1 {productsSelected.has(product.cod)
          ? 'bg-red-500/60'
          : ''} hover:bg-zinc-50/20"
      >
        {product.name}
      </button>
    {/each}
  </div>
  <button
    class="border rounded-md mt-1 py-1 px-2 hover:text-zinc-900 hover:bg-slate-50"
    on:click={remove_products}>Remover</button
  >
</button>
