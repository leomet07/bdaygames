<script>
	import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion.svelte";

	let questions = [];

	(async () => {
		const response = await fetch(
			"https://opentdb.com/api.php?amount=10&type=multiple",
			{
				method: "GET",
			}
		);

		let responsejson = await response.json();

		if (responsejson.response_code == 0) {
			console.log(responsejson.results);
			questions = responsejson.results;
		} else {
			console.log(responsejson);
		}
	})();
</script>

<main id="trivia">
	<h1>Trivia</h1>
	<div id="questions">
		{#each questions as question}
			<MultipleChoiceQuestion {question} />
		{/each}
	</div>
</main>

<style>
	#trivia {
		text-align: center;
		padding-bottom: 60px;
	}
</style>
