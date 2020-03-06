import { h, Component, render } from '../contrib/node_modules/preact/src/index';

import Players from './players';

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

const navbar = {
    "display": "flex",
    "width": "100%",
    "height": "6.5rem",
    "background": "#fff",
    "margin-top": "2rem",
    "margin-bottom": "2rem",
    "z-index": 99,
    "border-top": "1px solid #eee",
    "border-bottom": "1px solid #eee",
    "justify-content" : "center",
    "align-items": "center",
    "position":"sticky",
    "top":"0"
};
const navbarList = {
    "list-style": "none",
    "margin-bottom": 0
};
const navbarItem = {
    "position": "relative",
    "float": "left",
    "margin-bottom": 0
};
const navbarLink = {
    "text-transform": "uppercase",
    "border": "none",
    "font-size": "11px",
    "font-weight": "600",
    "letter-spacing": "0.2rem",
    "margin-right": "35px",
    "margin-left": "35px",
    "text-decoration": "none",
    "line-height": "6.5rem",
    "color": "#222"
};
const navbarButton = {
    "border": "none",
    "height": "6.5rem",
    "margin-bottom": "0rem"
};




class App extends Component {
    render(props, state) {
        return (
          h("div", {id:"app"},

          h("div",{class:"container",style: heroStyle},
              h("a",{href:"#", onClick: ()=>{}},
                  h("img",{src:"./logo.png", width:"250", height: "250", style: imageStyle},null)
              )
          ),
          h("div",{class:"navbar lakelandcup-navbar"}, 
            h("section", {class:"navbar-section"}, null),
            h("section", {class:"navbar-center"},
              h("a", {class:"btn btn-link text-gray"}, "Home"),
              h("a", {class:"btn btn-link text-gray"}, "Players"),
              h("a", {class:"btn btn-link text-gray"}, "Login")
            ),
            h("section", {class:"navbar-section"}, null),
          ),   
          h("div",{class: "lakelandcup-navbar-spacer"},null),
          h("div",{class:"container grid-lg"},
              h("p", {}, dummyText+dummyText+dummyText+dummyText
              )  
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