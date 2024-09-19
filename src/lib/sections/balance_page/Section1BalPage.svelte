<script lang="ts">

  import { Icon } from "svelte-icons-pack";
  import { BiTrash } from "svelte-icons-pack/bi";
  import { BsPlusCircleFill } from "svelte-icons-pack/bs";
  import { costs, db } from "../../../routes/globalStores";
  import { refresh_costs } from "$lib/functions/db_functions";

  refresh_costs();

  let newCost: number | null = null;

  $: totalCost = $costs.reduce((pv, cost)=>pv+cost.value,0)

  function updateNewCost (e: Event) {
    let target = e.target as HTMLInputElement;
    if (target.value != "") {
      newCost = parseFloat(target.value);
    } else {
      newCost = null;
    }; 
  }

  async function addNewCost () {
    if (!newCost) {return}
    await $db.execute("INSERT INTO cost (value) VALUES ($1)", [newCost]);
    newCost = null;

    refresh_costs();
  }

  async function removeCost (e: Event) {
    let target = e.currentTarget as HTMLButtonElement;
    let idCost = target.dataset.id_cost
    if (idCost) {
      await $db.execute("DELETE FROM cost WHERE id = $1", [idCost]);
      refresh_costs();
    }
  }


</script>


<div class="max-w-full">
    <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 rounded-t-lg w-fit">
      <h2>Costos:</h2>
      <span class="font-medium text-lg">{totalCost.toFixed(2)} $</span>
    </div>
    <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 min-h-12 min-w-60 max-w-full rounded-r-md overflow-x-auto">
      {#each $costs as cost}
      <div class="flex flex-row gap-1 place-items-center p-1 bg-slate-50/60 text-zinc-900 rounded-md h-8">
        <span>{cost.value.toFixed(2)}</span>
        <button type="button" data-id_cost={cost.id} class="text-zinc-700 hover:text-zinc-900" on:click={(e)=>removeCost(e)}>
          <Icon src={BiTrash} size={20}/>
        </button>
      </div>
      {/each}
    </div>
    <div class="flex flex-row gap-2 place-items-center bg-neutral-700 p-2 rounded-b-lg w-fit">
      <input class="w-20 rounded-md outline-none bg-slate-50/60 text-zinc-900 text-center" type="number" value={newCost} on:input={e=>updateNewCost(e)}>
      <button class="flex flex-row gap-1 place-items-center text-slate-50/60 border rounded-md px-1 border-slate-50/60 hover:text-slate-50 hover:border-slate-50" on:click={addNewCost}>
        <Icon src={BsPlusCircleFill} size={20}/>
        <span class="font-extralight">Añadir</span>
      </button>
    </div>


  </div>