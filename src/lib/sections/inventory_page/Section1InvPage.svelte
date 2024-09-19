<script lang="ts">

    import { Icon } from "svelte-icons-pack";
    import { BiSearch } from "svelte-icons-pack/bi";
    import { BsPlusCircleFill, BsDashCircleFill } from "svelte-icons-pack/bs";
  import { modalVisible } from "./stores";

    function showModal (action: string) {
      modalVisible.set(action)
    }

</script>

<div class="flex gap-2 place-content-center">
    <div class="flex flex-row flex-grow max-w-72 gap-2 bg-neutral-700 p-2 rounded-xl">
      <div class="flex-grow relative">
          <input class="bg-neutral-50/60 w-full h-full px-1 rounded-lg outline-none text-zinc-900" type="text">
      </div>
      <button class="text-slate-50/70 hover:text-slate-50">
        <Icon src={BiSearch} size={30}/>
      </button>
    </div>

    <div class="flex flex-row gap-1 bg-neutral-700 p-2 rounded-xl">
      <button class="flex flex-row gap-1 items-center text-slate-50/70 hover:text-slate-50" on:click={()=>showModal("add")}>
        <Icon src={BsPlusCircleFill} size={30}/>
        <span class="hidden sm:block">Añadir</span>
      </button>
    </div>

    <div class="flex flex-row gap-1 bg-neutral-700 p-2 rounded-xl">
      <button class="flex flex-row gap-1 items-center text-slate-50/70 hover:text-slate-50" on:click={()=>showModal("remove")}>
        <Icon src={BsDashCircleFill} size={30}/>
        <span class="hidden sm:block">Remover</span>
      </button>
    </div>
</div>