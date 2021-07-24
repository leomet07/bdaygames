<script>
	let items = [];
	let forMale = true;
	let forFemale = true;
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
</script>

<main id="home">
	<h1>Truth Or Dare!</h1>
	<div>
		<input
			name="forMale"
			id="forMale"
			class="checkbox"
			type="checkbox"
			bind:checked={forMale}
		/>
		<label for="forMale">For Lads</label>
	</div>
	<br />
	<div>
		<input
			name="forFemale"
			id="forFemale"
			class="checkbox"
			type="checkbox"
			bind:checked={forFemale}
		/>
		<label for="forFemale">For Gals</label>
	</div>
	<div>
		<ol>
			{#each items as item}
				{#if (item.gender == "f" && forFemale) || (item.gender == "m" && forMale)}
					<li class={"stylefor" + item.gender}>
						-
						{item.text}
					</li>
				{:else}
					<div />
				{/if}
			{/each}
		</ol>
	</div>
</main>

<style>
	#home {
		text-align: center;
		padding-bottom: 60px;
	}
	.checkbox,
	label {
		vertical-align: middle;
		display: inline-block;
	}

	.styleforf {
		color: red;
	}
	.styleform {
		color: blue;
	}
</style>
