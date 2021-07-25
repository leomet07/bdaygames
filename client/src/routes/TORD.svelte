<script>
	import Switch from "../components/Switch.svelte";
	import { players } from "../stores";
	import { shuffle } from "../shuffle.js";
	let isMale = false;

	let items = [];

	(async () => {
		items = await get_items({});
	})();

	async function get_items(body) {
		let response = await fetch(window.BASE_URL + "/api/db/get_items", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		let json = await response.json();
		console.log(json.items);

		return shuffle(json.items);
	}

	function capatalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div id="tord">
	<h1 class="title">Truth Or Dare!</h1>

	<div>
		{#if $players.length < 2}
			<h3>You need at least 2 people in the game to choose from</h3>
		{:else}
			<div id="forwhoswitch">
				<h3 id="forwholabel">&nbsp;&nbsp;{isMale ? "Lads" : "Gals"}</h3>

				<Switch bind:checked={isMale} />
			</div>
			{#each items as item, index}
				{#if (item.gender == "f" && !isMale) || (item.gender == "m" && isMale)}
					<p id="tordtext">
						<span class={"label" + item.type}
							>{capatalizeFirstLetter(item.type)}:</span
						>
						<span class={"stylefor" + item.gender}>
							{item.text}
						</span>
					</p>
				{:else}
					<div />
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style>
	.styleforf {
		color: #de6d59;
	}
	.styleform {
		color: #2196f3;
	}

	#tord {
		min-width: 30vw;
		text-align: center;
		display: inline-block;
		padding-right: 16vw;
		padding-left: 1vw;
		margin-right: 0;
		width: 97vw;
	}

	.title {
		text-align: center;
	}

	#forwhoswitch {
		text-align: center;
	}

	#tordtext {
		margin-bottom: 10px;
	}

	.labeltruth {
		background-color: rgb(144, 144, 255);
		color: white;
	}
	.labeldare {
		background-color: rgb(255, 93, 93);
		color: white;
	}

	@media only screen and (min-width: 1250px) {
		#tord {
			width: 55vw;
			text-align: left;
		}
		.title {
			text-align: left;
			padding-left: 6vw;
		}

		#forwhoswitch {
			text-align: left;
			padding-left: 10vw;
		}
	}

	#forwholabel {
		margin-bottom: 5px;
	}
</style>
