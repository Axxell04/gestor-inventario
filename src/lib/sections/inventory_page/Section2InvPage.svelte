<script lang="ts">
  import { get_products, refresh_products } from "$lib/functions/db_functions";
  import { products } from "../../../routes/globalStores";
  
  refresh_products();

</script>

<div class="flex flex-row gap-2 bg-neutral-700 p-2 rounded-xl justify-self-center max-h-full overflow-y-auto" style="max-width: 1000px;">
    <table>
        <thead>
            <tr>
                <th>COD</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            {#each $products as product}
            <tr>
                <td>{product.cod}</td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
            </tr>                
            {/each}
        </tbody>
    </table>
    
</div>

<style lang="postcss">
    table {
        width: theme(width.full);
    }

    thead tr th:first-child {
        border-top-left-radius: theme(borderRadius.lg);
    }
    thead tr th:last-child {
        border-top-right-radius: theme(borderRadius.lg);
    }

    th {
        background-color: theme(colors.slate.50/0.6);
        color: theme(colors.neutral.700);
        padding: theme(padding.2) theme(padding.3);
        text-align: center;
    }
    
    td {
        background-color: theme(colors.slate.50/0.5);
        color: theme(colors.neutral.700);
        padding: theme(padding.2) theme(padding.2);
        text-align: center;
    }
    
    tbody tr:hover {
        background-color: theme(colors.slate.50/0.25);
        cursor: pointer;
    }

    tbody tr td:nth-child(2) {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    tbody tr:last-child td:first-child {
        border-bottom-left-radius: theme(borderRadius.lg);
    }
    tbody tr:last-child td:last-child {
        border-bottom-right-radius: theme(borderRadius.lg);
    }
    td {
        padding: theme(padding.1) theme(padding.3);
        text-align: center;
    }
</style>
<!-- <div class="flex flex-col gap-1 font-extralight place-items-center">
    <span class="font-medium">COD</span>
    <p>B33F</p>
    <p>F43D</p>
</div>
<div class="flex flex-col gap-1 font-extralight">
    <span class="font-medium">Nombre</span>
    <p>Coca-Cola</p>
    <p class=" line-clamp-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sit porro! Repudiandae debitis mollitia suscipit, unde laborum corrupti pariatur accusantium voluptas neque, culpa cum quibusdam molestias quaerat cumque excepturi sit!</p>
</div>
<div class="flex flex-col gap-1 font-extralight place-items-center">
    <span class="font-medium">Precio</span>
    <p>1.25 $</p>
    <p>1.25 $</p>
</div>
<div class="flex flex-col gap-1 font-extralight place-items-center">
    <span class="font-medium">Cantidad</span>
    <p>32</p>
    <p>2</p>
</div> -->