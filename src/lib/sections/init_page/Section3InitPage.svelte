<script>
  import { sales } from "../../../routes/globalStores";
  import Button from "../../components/Button.svelte";

  $: totalSales = $sales.reduce((pv, sale)=>pv+sale.value,0)
</script>

<div
  class="flex flex-col bg-neutral-700 place-items-center rounded-xl gap-2 p-5"
>
  <h2 class="font-medium">Resumen</h2>
  <div class="grid grid-flow-col gap-2 justify-items-center" style="grid-template-columns: 1fr 1px 1fr;">
    <div class="flex flex-col place-items-center w-fit p-2 pb-6">
      <h2 class="font-normal">Ventas</h2>
      <h2 class="font-bold text-lg">{$sales.length}</h2>
    </div>
    <div class="bg-slate-100 h-14 w-px self-center"></div>
    <div class="flex flex-col place-items-center w-fit p-2 pb-6">
      <h2 class="font-normal">Ingresos</h2>
      <h2 class="font-bold text-lg">{totalSales.toFixed(2)} $</h2>
    </div>
  </div>
  <div>
    <Button text="Detalles" onClick={()=>window.location.href = "/balance"}/>
  </div>
</div>
