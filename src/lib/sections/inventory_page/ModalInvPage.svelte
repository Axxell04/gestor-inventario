<script lang="ts">
  import { blur, slide } from "svelte/transition";
  import { modalVisible } from "./stores";
  import ModalTemplateAdd from "./modal_templates/ModalTemplateAdd.svelte";
  import ModalTemplateRemove from "./modal_templates/ModalTemplateRemove.svelte";
  function hiddenModal () {
    modalVisible.set(null)
  }

  async function addProduct () {
      
    }
</script>

{#if $modalVisible != null}
<button transition:blur class="flex flex-col place-content-center place-items-center absolute top-0 left-0 h-full w-full pb-16 bg-zinc-900/50 backdrop-blur-sm" on:click={hiddenModal}>
    {#if $modalVisible === "add"}
        <ModalTemplateAdd />
    {:else if $modalVisible === "remove"}
    <ModalTemplateRemove />
    {/if}
</button>

{/if}