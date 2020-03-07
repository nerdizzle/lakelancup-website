import { h, Component } from '../contrib/node_modules/preact/src/index.js';
/** CSS */
const loginSection = {
    "padding": "1rem .5rem",
    "background": "#f7f8f9",
    "text-align": "center"
};
/** Preact Component */
export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const loginScreen = h("div", { class: "container", style: loginSection }, h("div", { class: "columns" }, h("div", { class: "column column col-3 col-mx-auto col-xs-12 col-lg-6" }, h("form-group", {}, h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "text", placeholder: "username" }, null)), h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "password", placeholder: "password" }, null)), h("label", { class: "form-label" }, h("button", { class: "btn" }, "submit"))))));
        return (loginScreen);
    }
}
