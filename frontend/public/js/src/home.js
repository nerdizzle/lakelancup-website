import { h, Component } from '../contrib/node_modules/preact/src/index.js';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (h("div", { id: "app" }, h("div", { class: "lakelandcup-container" })));
    }
}
export default Home;
export { Home };
