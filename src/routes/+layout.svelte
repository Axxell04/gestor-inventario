<script lang="ts">
    import "../app.css"
    import { page } from "$app/stores";
  import { Icon } from "svelte-icons-pack";
  import { AiFillHome } from "svelte-icons-pack/ai";
  import { FaMoneyBill1, FaSolidBoxesStacked } from "svelte-icons-pack/fa";
  
  
</script>

<div class="absolute w-full top-0 h-full p-3" style="padding-bottom: 85px;">
    <div class="flex bg-zinc-900 w-full h-full rounded-lg overflow-auto">
        <slot/>
    </div>
</div>

<div class="flex flex-col h-screen">
    <div class="flex flex-grow p-5">
    </div>

    <div class="fixed bottom-0 p-3 flex w-full ">
        <nav class="flex flex-row gap-6 w-fit px-5 py-4 bg-zinc-900 mx-auto font-medium text-lg rounded-xl ">
            <a class="{$page.route.id === "/inventory" ? 'text-slate-50' : 'text-slate-50/60'} " href="/inventory">
                <Icon src={FaSolidBoxesStacked} size={30}/>
            </a>
            <a class="{$page.route.id === "/" ? 'text-slate-50' : 'text-slate-50/60'}" href="/">
                <Icon src={AiFillHome} size={30}/>
            </a>
            <a class="{$page.route.id === "/balance" ? 'text-slate-50' : 'text-slate-50/60'} " href="/balance">
                <Icon src={FaMoneyBill1} size={30}/>
            </a>
        </nav>
    
    </div>
</div>




<style lang="postcss">
    :global(html) {
        background-color: theme(colors.zinc.700);
        color: theme(colors.slate.100);
    }
    nav a {
        padding-inline: theme(padding.2);
    }
    nav a:hover {
        color: theme(colors.slate.200);
    }
</style>