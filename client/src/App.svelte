<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import TORD from "./routes/TORD.svelte";

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
		<Link to="about">About</Link>
	</nav>
	<div>
		<main class="route">
			<Route path="tord" component={TORD} />
			<Route path="about" component={About} />
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
	}
</style>
