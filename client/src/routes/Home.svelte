<script>
	import { Router, Link, Route, navigate } from "svelte-routing";
</script>

<main id="home">
	<h1>Birthday party games!</h1>
	<h2>Play lots of party games with never ending fresh content!</h2>
	<h3>(and have a Happy Hacky Birthday!)</h3>
	<div id="showcase">
		<div
			class="box"
			on:click={() => {
				navigate("/tord");
			}}
		>
			<img src="/img/tord_preview.png" alt="TORD preview" />
			<h2>Truth or dare</h2>
		</div>

		<div
			class="box"
			on:click={() => {
				navigate("/trivia");
			}}
		>
			<img src="/img/trivia_preview.png" alt="Trivia preview" />
			<h2>Trivia</h2>
		</div>
		<div
			class="box"
			on:click={() => {
				navigate("/choose");
			}}
		>
			<img src="/img/choose_preview.png" alt="Choose preview" />
			<h2>Choose!</h2>
		</div>
	</div>
</main>

<style>
	#home {
		text-align: center;
		padding-bottom: 60px;
	}
	#showcase {
		display: flex;
		justify-content: center;
		width: 100vw;
		max-width: 1800px;
		margin: auto;

		/* align-items: center; */
	}

	.box {
		flex: 1;
		border: 1px solid black;
		border-radius: 30px;
		margin: 10px;

		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box img {
		width: 20vw;
		margin-top: 3vh;
	}

	@media (max-width: 900px) {
		#showcase {
			display: block;
			max-width: 500px;
		}
	}
</style>
