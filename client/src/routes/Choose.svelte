<script>
	import { players, turn_index } from "../stores";
	import { shuffle } from "../shuffle.js";
	let questions = [];
	let chosennum = 0;
	(async () => {
		questions = await get_questions({});
		chosennum = getRandomInt(questions.length);
		console.log("Questions: ", questions);
	})();

	async function get_questions(body) {
		let response = await fetch(window.BASE_URL + "/api/db/get_questions", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		let json = await response.json();

		return shuffle(json.questions);
	}

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	turn_index.subscribe((val) => {
		console.log("Turn updated");
		chosennum = getRandomInt(questions.length);
	});
</script>

<main id="choose">
	<h1 class="title">Chooser</h1>
	<h2>Choose something that best fits the question!</h2>
	<h2>When answered, press next turn on the sidebar!</h2>
	{#if $players.length < 2}
		<h3>You need at least 2 people in the game to choose from</h3>
	{:else}
		<h2>
			{#if questions.length > 0}
				{$players[$turn_index].name}, your random "chooser" is #{chosennum +
					1}, {questions[chosennum].question}
			{:else}
				<p>Loading</p>
			{/if}
		</h2>
		{#each questions as question, index}
			<p>{index + 1}. {question.question}</p>
		{/each}
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
