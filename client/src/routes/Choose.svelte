<script>
	import { players, turn_index } from "../stores";

	(async () => {})();
</script>

<main id="choose">
	<h1 class="title">Chooser</h1>

	{#if $players.length < 2}
		<h3>You need at least 2 people in the game to choose from</h3>
	{:else}
		<h2>Who is the most likley to be arrested?</h2>
	{/if}
</main>

<style>
	#choose {
		min-width: 30vw;
		text-align: center;
		display: inline-block;
		padding-right: 16vw;
		padding-left: 1vw;
		margin-right: 0;
		width: 97vw;
	}
	@media only screen and (min-width: 1250px) {
		#choose {
			width: 55vw;
			text-align: left;
		}

		.title {
			text-align: left;
			padding-left: 8vw;
		}
	}
</style>
