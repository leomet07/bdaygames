<script>
	import { bubble } from "svelte/internal";

	export let question;
	let revealed = false;
	console.log(question);

	let bubbles = [];

	for (let incorrect_answer of question.incorrect_answers) {
		bubbles.push({ text: incorrect_answer, correct: false });
	}

	bubbles.push({ text: question.correct_answer, correct: true });

	bubbles.sort(() => Math.random() - 0.5);

	console.log({ bubbles });

	function choose(par) {
		// const element = par.target;
		// const type = element.classList[element.classList.length - 1];
		// console.log(type);

		revealed = true;
	}
</script>

<p id="question">Question: {@html question.question}</p>

<div>
	{#each bubbles as bubble}
		<div class="bubblecontainer {revealed ? 'revealed' : ''}">
			<span
				class="bubbletext {bubble.correct
					? 'correct_choice'
					: 'incorrect_choice'}"
				on:click={choose}
			>
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
		background-color: rgb(255, 72, 72);
	}

	#question {
		font-size: 18px;
	}
</style>
