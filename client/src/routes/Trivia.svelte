<script>
	import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion.svelte";
	import { triviaquestions } from "../stores";

	(async () => {
		$triviaquestions = await get_trivia();
	})();

	async function change_catagory(cat) {
		let newcat = document.getElementById("change_catagory_selecter").value;
		console.log("change catagory", newcat);

		const response = await get_trivia({ catagory: newcat });

		$triviaquestions = response;

		console.log("in triva, questions are: ", $triviaquestions);
	}

	async function get_trivia(extra) {
		let params = { amount: 10, type: "multiple", ...extra };

		const url =
			"https://opentdb.com/api.php?" + new URLSearchParams(params);

		console.log("Url: ", url);

		const response = await fetch(url, {
			method: "GET",
		});

		let responsejson = await response.json();

		return responsejson.results;
	}
</script>

<main id="trivia">
	<h1 class="title">Group Trivia</h1>

	<!-- svelte-ignore a11y-no-onchange -->
	<select id="change_catagory_selecter" on:change={change_catagory}>
		<option value="any">Any Category</option>
		<option value="9">General Knowledge</option>
		<option value="10">Entertainment: Books</option>
		<option value="11">Entertainment: Film</option>
		<option value="12">Entertainment: Music</option>
		<option value="13">Entertainment: Musicals &amp; Theatres</option>
		<option value="14">Entertainment: Television</option>
		<option value="15">Entertainment: Video Games</option>
		<option value="16">Entertainment: Board Games</option>
		<option value="17">Science &amp; Nature</option>
		<option value="18">Science: Computers</option>
		<option value="19">Science: Mathematics</option>
		<option value="20">Mythology</option>
		<option value="21">Sports</option>
		<option value="22">Geography</option>
		<option value="23">History</option>
		<option value="24">Politics</option>
		<option value="25">Art</option>
		<option value="26">Celebrities</option>
		<option value="27">Animals</option>
		<option value="28">Vehicles</option>
		<option value="29">Entertainment: Comics</option>
		<option value="30">Science: Gadgets</option>
		<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
		<option value="32">Entertainment: Cartoon &amp; Animations</option>
	</select>

	<div id="questions">
		{#each $triviaquestions as question, index}
			<MultipleChoiceQuestion {index} />
		{/each}
	</div>
</main>

<style>
	#trivia {
		min-width: 30vw;
		text-align: center;
		display: inline-block;
		padding-right: 16vw;
		padding-left: 1vw;
		margin-right: 0;
		width: 97vw;
	}
	@media only screen and (min-width: 1250px) {
		#trivia {
			width: 55vw;
			text-align: left;
		}

		.title {
			text-align: left;
			padding-left: 8vw;
		}

		#change_catagory_selecter {
			text-align: center;
			margin-left: 1vw;
		}
	}
</style>
