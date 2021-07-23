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
	async function changeHandler(change) {
		console.log("In get items");
		if (change) {
			if (change.srcElement.id == "forMale") {
				forMale = change.srcElement.checked;
			} else if (change.srcElement.id == "forFemale") {
				forFemale = change.srcElement.checked;
			}
		}

		let body = {};
		if (forMale && forFemale) {
			body = {};
		} else if (forMale) {
			// If both, stay undefined
			body.gender = "m";
		} else if (forFemale) {
			// If both, stay undefined
			body.gender = "f";
		}

		items = await get_items(body);
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
			on:change={changeHandler}
			checked
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
			on:change={changeHandler}
			checked
		/>
		<label for="forFemale">For Gals</label>
	</div>
	<div>
		{#each items as item}
			<p>
				-
				{item.text}
			</p>
		{/each}
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
</style>
