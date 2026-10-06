import { search } from "./search.js";
import { resultado } from "./resultado.js";
import { cadastro } from "./cadastro.js";
import { inativar } from "./inativar.js";

const main = document.getElementById("main");

const routes = {
	"#/buscar": search,
	"#/resultado": resultado,
	"#/cadastro": cadastro,
	"#/inativar": inativar
};

function renderRoute() {
	const route = routes[window.location.hash] ?? routes["#/buscar"];

	main.innerHTML = route;
}

window.addEventListener("hashchange", renderRoute);
renderRoute();