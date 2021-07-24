<script>
	import Switch from "../components/Switch.svelte";

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
		return json.items;
	}

	function capatalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div id="tord">
	<h1 class="title">Truth Or Dare!</h1>
	<div id="forwhoswitch">
		<Switch bind:checked={isMale} />
		<br />
		{isMale ? "Lads" : "Gals"}
	</div>

	<div>
		<ol>
			{#each items as item}
				{#if (item.gender == "f" && !isMale) || (item.gender == "m" && isMale)}
					<li id="tordtext">
						<span class={"label" + item.type}
							>{capatalizeFirstLetter(item.type)}:</span
						>
						<span class={"stylefor" + item.gender}>
							{item.text}
						</span>
					</li>
				{:else}
					<div />
				{/if}
			{/each}
		</ol>
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
		/* border: 1px solid black; */
		display: inline-block;
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
</style>
