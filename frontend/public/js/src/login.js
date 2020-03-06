import { h, Component } from '../contrib/node_modules/preact/src/index.js';
/** CSS */
const loginSection = {
    "padding": "1rem .5rem",
    "background": "#f7f8f9",
    "text-align": "center"
};
const inputFormStyle = {
    "border-radius": "4px"
};
/** Preact Component */
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const loginScreen = h("div", { class: "container", style: loginSection }, h("div", { class: "columns" }, h("div", { class: "column column col-4 col-mx-auto col-xs-12" }, h("form-group", {}, h("label", { class: "form-label" }, h("input", { class: "form-input s-rounded", type: "text", placeholder: "username", style: inputFormStyle }, null)), h("label", { class: "form-label" }, h("input", { class: "form-input", type: "password", placeholder: "password", style: inputFormStyle }, null)), h("label", { class: "form-label" }, h("button", { class: "btn" }, "submit"))))));
        return (loginScreen);
    }
}
export default Login;
export { Login };
