import { h, Component } from '../contrib/node_modules/preact/src/index.js';
class Players extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (h("div", { id: "app" }, h("div", { class: "lakelandcup-container" })));
    }
}
export default Players;
export { Players };
