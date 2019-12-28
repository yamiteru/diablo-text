<script>
	import randomItemToInventory from "../lib/_help/randomItemToInventory.js";
</script>

<svelte:head>
	<title>Diablo Text</title>
</svelte:head>

<h1 on:click={() => { randomItemToInventory("weapons", "armors"); }}>Armors</h1>
<h1 on:click={() => { randomItemToInventory("weapons", "axes"); }}>Axes</h1>
<h1 on:click={() => { randomItemToInventory("weapons", "bows"); }}>Bows</h1>
<h1 on:click={() => { randomItemToInventory("weapons", "helms"); }}>Helms</h1>
<h1 on:click={() => { randomItemToInventory("weapons", "swords"); }}>Swords</h1>
