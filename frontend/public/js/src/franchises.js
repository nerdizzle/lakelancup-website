import { h, Component } from '../contrib/node_modules/preact/src/index.js';
export default class Franchises extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (h("div", { class: "container grid-lg" }, h("div", { class: "columns" }, h("div", { class: "column col-6 col-xs-12 col-mx-auto" }, h("form-group", {}, h("select", { class: "form-select lakelandcup-input-form", type: "text" }, null))))));
    }
}
