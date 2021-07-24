<main id="people">
	<div id="floater"><h1>People</h1></div>
</main>

<style>
	#people {
		width: 97vw;
		margin: 0;
		padding: 0;
		display: inline-block;

		margin-bottom: 10px;
	}

	#floater {
		text-align: center;
		border: 1px solid black;
	}

	@media only screen and (min-width: 1250px) {
		#people {
			margin-left: 1vw;
			width: 45vw;
			height: 90vh;
		}
		#floater {
			margin-top: 25vh;

			position: fixed;
			height: 40vh;
			width: 35vw;
			margin-right: 10px;
			margin-left: 5px;
		}
	}
</style>
