import { h, Component, render } from '../contrib/node_modules/preact/src/index';

class Test extends Component {
    render(props, state) {
        return (
            h("div", {id:"app"},
                h("h1",{}, "Hallo Welt"),
            null)
        );
    }
}
render(h(Test,null), document.body);
