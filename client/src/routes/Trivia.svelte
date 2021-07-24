<script>
	(async () => {
		const response = await fetch("https://opentdb.com/api.php?amount=10", {
			method: "GET",
			headers: {
				cookie: "PHPSESSID=1f8f63a803dd2ad76389e372ee9a94ca",
			},
		});

		let responsejson = await response.json();

		if (responsejson.response_code == 0) {
			console.log(responsejson.results);
		} else {
			console.log(responsejson);
		}
	})();
</script>

<main id="trivia">
	<h1>Trivia</h1>
</main>

<style>
	#trivia {
		text-align: center;
		padding-bottom: 60px;
	}
</style>
