import { h, Component, render } from '../contrib/node_modules/preact/src/index';
import { Router } from '../contrib/node_modules/preact-router/src/index';

import Home from './players';
import Players from './players';
import Login from './login';


const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const heroStyle = {
  "margin-left":"auto",
  "margin-right":"auto",
  "padding-left":"0.4rem",
  "padding-right":"0.4rem",
  "padding-bottom": "1rem",
  "padding-top": "1rem",
  "width" : "100%",
}


const imageStyle = {
  "display":"block",
  "margin-left":"auto",
  "margin-right":"auto",
  "pointer":"pointer"
}

class App extends Component {
    render(props, state) {
        return (
          h("div", {id:"app"},
            h("div",{class:"container",style: heroStyle},
              h("a",{href:"/", onClick: ()=>{}},
                h("img",{src:"./logo.png", width:"250", height: "250", style: imageStyle},null)
              )
            ),
            h("header",{class:"navbar lakelandcup-navbar"}, 
              h("section", {class:"navbar-section"}, null),
              h("section", {class:"navbar-center"},
                h("a", {class:"btn btn-link text-dark", href:"/"}, "Home"),
                h("a", {class:"btn btn-link text-dark", href:"/players"}, "Players"),
                h("a", {class:"btn btn-link text-dark", href:"/login"}, "Login")
              ),
              h("section", {class:"navbar-section"}, null)
            ),   
            h("div",{class: "lakelandcup-navbar-spacer"},null),
            h("div",{class:"container grid-lg ", style: {"padding-left": "1rem", "padding-right": "1rem"}},
              //h(Login, {}, null)  
            ),
            h(Router,{},
              h(Home, {path:"/"}, null),
              h(Players, {path:"/players"}, null),
              h(Login, {path:"/login"}, null)
            )
          )
    );
  }
}
render(h(App,null), document.body);
/*
const heroContainer = {
  "margin-left":"auto",
  "margin-right":"auto",
  "padding-left":"0.4rem",
  "padding-right":"0.4rem",
  "padding-bottom": "2rem",
  "padding-top": "6rem",
  "width" : "100%",
  //"height":"50%"
}

const loginImage = {
  "display":"block",
  "margin-left":"auto",
  "margin-right":"auto",
  "pointer":"pointer"
}
class HeroHeader extends Component {
  constructor(props){
          super(props);
          this.stat = {
              dropdownHandler: props.dropdownHandler
          };
  }
  render(){
      return(
          h("div",{class:"container",style: heroContainer},
              h("a",{href:"#home", onClick: ()=>this.props.dropdownHandler("home")},
                  h("img",{src:"./img/lakelandcuplogo.png", width:"250", height: "250", style: loginImage},null)
              )
          )
      );
  }

}

export default HeroHeader;
export{HeroHeader}

*/