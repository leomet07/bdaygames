<script>
	import { triviaquestions } from "../stores";
	export let index;

	let revealed = false;

	let bubbles = [];
	let questiontext;

	function updatebubbles(val) {
		const question = val[index];

		questiontext = question.question;

		// console.log("question", question);
		bubbles = [];
		for (let incorrect_answer of question.incorrect_answers) {
			bubbles.push({ text: incorrect_answer, correct: false });
		}

		bubbles.push({ text: question.correct_answer, correct: true });

		bubbles.sort(() => Math.random() - 0.5);
	}

	triviaquestions.subscribe(updatebubbles);
	updatebubbles($triviaquestions);

	function choose(par) {
		// const element = par.target;
		// const type = element.classList[element.classList.length - 1];
		// console.log(type);

		revealed = true;
	}
</script>

<p id="question">Question: {@html questiontext}</p>

<div id="bubbles">
	{#each bubbles as bubble, index}
		<div class="bubblecontainer {revealed ? 'revealed' : ''}">
			<span
				class="bubbletext {bubble.correct
					? 'correct_choice'
					: 'incorrect_choice'}"
				on:click={choose}
			>
				{index + 1}:
				{@html bubble.text}
			</span>
			<br />
		</div>
	{/each}
</div>

<style>
	.bubblecontainer {
		margin: 25px;
	}

	.bubbletext {
		margin: auto;
		text-align: left;
		padding: 5px 10px 5px 10px;
	}

	.revealed > .correct_choice {
		background-color: rgb(133, 255, 133);
	}
	.revealed > .incorrect_choice {
		background-color: rgb(255, 133, 133);
	}

	#question {
		font-size: 18px;
		font-weight: bold;
	}
</style>
