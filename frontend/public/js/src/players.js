import { h, Component } from '../contrib/node_modules/preact/src/index.js';
export default class Players extends Component {
    render(props, state) {
        return (h("div", { id: "app" }, h("div", { class: "lakelandcup-container" })));
    }
}
//render(h(Players,null), document.body);
