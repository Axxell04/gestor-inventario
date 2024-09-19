<script lang="ts">

  import { fly } from "svelte/transition";
  import { Icon } from "svelte-icons-pack";
  import Section1InvPage from "$lib/sections/inventory_page/Section1InvPage.svelte";
  import Section2InvPage from "$lib/sections/inventory_page/Section2InvPage.svelte";
  import ModalInvPage from "$lib/sections/inventory_page/ModalInvPage.svelte";



</script>

<div in:fly class="flex flex-col self-center m-auto gap-2 p-2 max-h-full">
    <Section1InvPage />
    <div class="flex-grow relative max-h-full overflow-y-auto rounded-xl">
      <Section2InvPage />
    </div>
    <ModalInvPage/>
</div>