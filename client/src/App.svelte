<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import TORD from "./routes/TORD.svelte";
	import Trivia from "./routes/Trivia.svelte";
	import Choose from "./routes/Choose.svelte";
	import People from "./components/People.svelte";
	window.BASE_URL = "https://bdaygames.herokuapp.com";
	if (
		window.location.hostname == "localhost" ||
		window.location.hostname == "127.0.0.1"
	) {
		console.log("In development mode");
		window.BASE_URL = "http://127.0.0.1:5678";
	}

	export let url = "";
</script>

<Router {url}>
	<nav>
		<Link to="/">Home</Link> |
		<Link to="/tord">TORD</Link> |
		<Link to="/trivia">Trivia</Link> |
		<Link to="/choose">Choose</Link> |
		<Link to="about">About</Link>
	</nav>
	<div>
		<main class="route">
			<Route path="tord">
				<div class="withsidebar"><People /><TORD /></div>
			</Route>
			<Route path="trivia">
				<div class="withsidebar"><People /><Trivia /></div>
			</Route>
			<Route path="choose">
				<div class="withsidebar"><People /><Choose /></div>
			</Route>
			<Route path="about"><About /></Route>

			<Route path="/"><Home /></Route>
		</main>
	</div>
</Router>

<style>
	nav {
		text-align: center;
	}
	.route {
		text-align: center;
		margin: 0;
		padding: 0;
	}

	@media only screen and (min-width: 1250px) {
		.withsidebar {
			display: flex;
			justify-content: center;
			/* align-items: center; */
		}
	}
</style>
