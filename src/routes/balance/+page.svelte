<script lang="ts">
  import Section1BalPage from "$lib/sections/balance_page/Section1BalPage.svelte";
  import Section2BalPage from "$lib/sections/balance_page/Section2BalPage.svelte";
  import Section3BalPage from "$lib/sections/balance_page/Section3BalPage.svelte";
import { Icon } from "svelte-icons-pack";

  import { fade, fly, slide } from "svelte/transition";

</script>
<div in:fly class="relative flex flex-col self-center m-auto gap-2 max-w-full p-2">
    <Section1BalPage />
    <Section2BalPage />
    <Section3BalPage />
  
  </div>