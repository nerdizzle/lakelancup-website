import { h, Component } from '../contrib/node_modules/preact/src/index.js';
/** CSS */
const loginSection = {
    "padding": "1rem .5rem",
    "background": "#f7f8f9",
    "text-align": "center"
};
/** Preact Component */
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.updateUsername = e => {
            this.setState({ username: e.target.value });
        };
        this.updatePassword = e => {
            this.setState({ password: e.target.value });
        };
        this.checkPassword = e => {
            this.setState({ password: e.target.value });
        };
        this.updateEmail = e => {
            this.setState({ password: e.target.value });
        };
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }
    render() {
        console.log("RENDERED SIGNUP");
        const signupScreen = h("div", { class: "container", style: loginSection }, h("div", { class: "columns" }, h("div", { class: "column column col-3 col-mx-auto col-xs-12 col-lg-6" }, h("form-group", {}, h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "text", placeholder: "username", onChange: this.updateUsername }, null)), h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "text", placeholder: "email", onChange: this.updateUsername }, null)), h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "text", placeholder: "password", onChange: this.updatePassword }, null)), h("label", { class: "form-label" }, h("input", { class: "form-input lakelandcup-input-form", type: "text", placeholder: "password", onChange: this.checkPassword }, null)), h("label", { class: "form-label" }, h("button", { class: "btn", onClick: () => { console.log(this.state); } }, "submit"))))));
        return (signupScreen);
    }
}
