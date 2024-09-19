<script lang="ts">
    export let text: string;
    export let onClick: () => void;
</script>

<button class="bg-neutral-100 text-neutral-900 p-2 rounded-xl font-medium hover:bg-neutral-100/60 " on:click={onClick}>
    {text}
</button>