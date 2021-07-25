<script>
	import { players, turn_index } from "../stores";

	async function addPlayer(e) {
		e.preventDefault();

		let input = document.getElementById("playername");

		let playername = input.value;
		if (playername) {
			$players = [...$players, { name: playername }];

			input.value = "";
		}
	}

	async function increment() {
		if ($turn_index < $players.length - 1) {
			$turn_index++;
		} else {
			$turn_index = 0;
		}
	}

	function removePlayer(index) {
		console.log("remove player");
		$players.splice(index, 1);
		$players = $players;
		$turn_index = 0;
	}
</script>

<main id="people">
	<div id="floater">
		<h1>People</h1>
		<div id="playersdiv">
			{#each $players as player, index}
				<p
					class="player_display"
					on:click={() => {
						console.log("Clicked");
						removePlayer(index);
					}}
				>
					Player #{index + 1}: {player.name}
				</p>
			{/each}
			{#if $players.length > 0}
				<p>
					Current turn: Player #{$turn_index + 1} (AKA: {$players[
						$turn_index
					]["name"]})
				</p>
			{:else}
				<p>Add some of the players' names</p>
			{/if}

			<button on:click={increment}>Next turn</button>
		</div>

		<form autocomplete="off" on:submit={addPlayer}>
			<input type="text" id="playername" />
			<input class="button" value="Add Player" type="submit" />
		</form>
	</div>
</main>

<style>
	#people {
		width: 97vw;
		margin: 0;
		padding: 0;
		display: inline-block;

		margin-bottom: 10px;
	}

	#floater {
		text-align: center;
		border: 1px solid black;
	}

	@media only screen and (min-width: 1250px) {
		#people {
			margin-left: 1vw;
			width: 45vw;
			height: 90vh;
		}
		#floater {
			margin-top: 25vh;

			position: fixed;
			height: 40vh;
			width: 35vw;
			margin-right: 10px;
			margin-left: 5px;
		}
	}

	.player_display:hover {
		text-decoration: line-through;
	}
</style>
