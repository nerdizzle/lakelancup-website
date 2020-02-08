import { h, Component, render } from '../contrib/node_modules/preact/src/index.js';
class Test extends Component {
    render(props, state) {
        return (h("div", { id: "app" }, h("section", { class: "hero is-primary is-medium" }, h("div", { class: "hero-head" }, h("nav", { class: "navbar" }, h("div", { class: "container" }, h("div", { id: "navbarMenuHeroA", class: "navbar-menu" }, h("div", { class: "navbar-start" }, h("a", { class: "navbar-item" }, "Home"), h("a", { class: "navbar-item" }, "Players"), h("a", { class: "navbar-item" }, "Login"))))))), null));
    }
}
render(h(Test, null), document.body);
/*
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  */ 
