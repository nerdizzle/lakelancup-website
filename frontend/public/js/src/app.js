import { h, Component, render } from '../contrib/node_modules/preact/src/index.js';
import { Router } from '../contrib/node_modules/preact-router/src/index.js';
import Home from './home.js';
import Players from './players.js';
import Franchises from './franchises.js';
import Login from './login.js';
const heroStyle = {
    "margin-left": "auto",
    "margin-right": "auto",
    "padding-left": "0.4rem",
    "padding-right": "0.4rem",
    "padding-bottom": "1rem",
    "padding-top": "1rem",
    "width": "100%",
};
const imageStyle = {
    "display": "block",
    "margin-left": "auto",
    "margin-right": "auto",
    "pointer": "pointer"
};
class App extends Component {
    render(props, state) {
        return (h("div", { id: "app" }, h("div", { class: "container", style: heroStyle }, h("a", { href: "/", onClick: () => { } }, h("img", { src: "./logo.png", width: "250", height: "250", style: imageStyle }, null))), h("header", { class: "navbar lakelandcup-navbar" }, h("section", { class: "navbar-section" }, null), h("section", { class: "navbar-center" }, h("a", { class: "btn btn-link text-dark", href: "/franchises" }, "Franchises"), h("a", { class: "btn btn-link text-dark", href: "/players" }, "Players"), h("a", { class: "btn btn-link text-dark", href: "/login" }, "Login")), h("section", { class: "navbar-section" }, null)), h("div", { class: "lakelandcup-navbar-spacer" }, null), h(Router, {}, h(Home, { path: "/" }, null), h(Franchises, { path: "/franchises" }, null), h(Players, { path: "/players" }, null), h(Login, { path: "/login" }, null))));
    }
}
render(h(App, null), document.body);
