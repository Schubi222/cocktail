<script lang="ts">
	import type { Recipe, Ingredient } from '../types/recipe';

	export let recipe: Recipe;
	const { title, ingredients, description, flavours } = recipe;
</script>

<div class="Recipe-Wrapper">
	<h1 class="main-heading">{title}</h1>
	<div class="Flavours-Wrapper">
		{#each flavours as flavour}
			<div class="flavour">{flavour}</div>
		{/each}
	</div>
	<h2 class="section-heading">Ingredients</h2>
	<ul class="ingredient-ul">
		{#each ingredients as { name, amount, unit }}
			<li class="ingredient-li">
				<div class="name">{name}</div>
				<div class="amount">{amount}</div>
				<div class="unit">{unit}</div>
			</li>
		{/each}
	</ul>
	<div class="description">{description}</div>
</div>
