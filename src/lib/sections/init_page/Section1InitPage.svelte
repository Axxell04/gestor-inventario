<script>
  import { products } from "../../../routes/globalStores";
import Button from "../../components/Button.svelte";
</script>

<div
  class="flex flex-col bg-neutral-700 place-items-center rounded-xl gap-3 p-5 max-h-full"
>
  <div class="flex flex-col place-items-center w-fit p-2 pb-6 border-b">
    <h2 class="font-medium">Productos en Stock</h2>
    <h2 class="font-bold text-lg">{$products.length}</h2>
  </div>
  <div class="flex flex-col gap-1 overflow-y-auto w-full place-items-center">
    {#each $products as product}
      <span>{product.name}</span>
    {/each}
  </div>
  <div class="mt-auto">
    <Button text="Ver más.." onClick={()=>window.location.href="/inventory"}/>
  </div>
</div>
