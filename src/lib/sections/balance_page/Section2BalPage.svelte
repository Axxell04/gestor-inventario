<script lang="ts">
  import { refresh_sales } from "$lib/functions/db_functions";


  import { Icon } from "svelte-icons-pack";
  import { BiTrash } from "svelte-icons-pack/bi";
  import { BsPlusCircleFill } from "svelte-icons-pack/bs";
  import { db, sales } from "../../../routes/globalStores";

  refresh_sales();

  let newSale: number | null = null;

  $: totalSales = $sales.reduce((pv, sale)=>pv+sale.value,0)

  function updateNewSale (e: Event) {
    let target = e.target as HTMLInputElement;
    if (target.value != "") {
      newSale = parseFloat(target.value);
    } else {
      newSale = null;
    }; 
  }

  async function addNewSale () {
    if (!newSale) {return}
    await $db.execute("INSERT INTO sale (value) VALUES ($1)", [newSale]);
    newSale = null;

    refresh_sales();
  }

  async function removeSale (e: Event) {
    let target = e.currentTarget as HTMLButtonElement;
    let idSale = target.dataset.id_sale
    if (idSale) {
      await $db.execute("DELETE FROM sale WHERE id = $1", [idSale]);
      refresh_sales();
    }
  }
  
  </script>
  
  
  <div class="max-w-full">
      <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 rounded-t-lg w-fit">
        <h2>Ventas:</h2>
        <span class="font-medium text-lg">{totalSales.toFixed(2)} $</span>
      </div>
      <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 min-h-12 min-w-60 max-w-full rounded-r-md overflow-x-auto">
        {#each $sales as sale}
        <div class="flex flex-row gap-1 place-items-center p-1 bg-slate-50/60 text-zinc-900 rounded-md h-8">
          <span>{sale.value.toFixed(2)}</span>
          <button data-id_sale={sale.id} class="text-zinc-700 hover:text-zinc-900" on:click={e=>removeSale(e)}>
              <Icon src={BiTrash} size={20}/>
          </button>
        </div>
        {/each}
      </div>
      <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 rounded-b-lg w-fit">
        <input class="w-20 rounded-md outline-none bg-slate-50/60 text-zinc-900 text-center" type="number" value={newSale} on:input={e=>updateNewSale(e)}>
        <button class="flex flex-row gap-1 place-items-center text-slate-50/60 border rounded-md px-1 border-slate-50/60 hover:text-slate-50 hover:border-slate-50" on:click={addNewSale}>
          <Icon src={BsPlusCircleFill} size={20}/>
          <span class="font-extralight">Añadir</span>
        </button>
      </div>
  
  
    </div>