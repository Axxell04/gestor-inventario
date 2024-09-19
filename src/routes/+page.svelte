<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import Button from "../lib/components/Button.svelte";
  import Section1InitPage from "../lib/sections/init_page/Section1InitPage.svelte";
  import Section2InitPage from "../lib/sections/init_page/Section2InitPage.svelte";
  import Section3InitPage from "../lib/sections/init_page/Section3InitPage.svelte";
  import { fade, fly, slide,  } from "svelte/transition";
  import { db } from "./globalStores";
  import { initDB, refresh_costs, refresh_products, refresh_sales } from "$lib/functions/db_functions";

  let name = "";
  let greetMsg = "";

  
  initDB()
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg = await invoke("greet", { name });
  }
  refresh_costs();
  refresh_products();
  refresh_sales();
</script>

<div in:fly class="flex flex-row self-center p-2 m-auto gap-2 max-h-full">
  <div>
    <Section1InitPage/>
  </div>
  <div class="flex flex-col mt-auto gap-2 max-h-full">
    <Section2InitPage />
    <Section3InitPage />
  </div>

  

</div>