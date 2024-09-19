<script lang="ts">
  import { costs, sales } from "../../../routes/globalStores";


    $: totalSales = $sales.reduce((pv, sale)=>pv+sale.value,0);
    $: totalCost = $costs.reduce((pv, cost)=>pv+cost.value,0);

    $: earnings = totalSales - totalCost;
</script>


<div class="flex flex-col gap-1 bg-neutral-700 p-2 rounded-md place-content-center place-items-center">
    <h2>Ganancias</h2>
    <span class="font-medium text-lg">{earnings.toFixed(2)} $</span>
</div>