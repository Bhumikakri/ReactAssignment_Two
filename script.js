let container = document.querySelector(".container");

let heading = React.createElement('h1',{id:"h"}, "Topics Covered");

let paraOne = React.createElement('p', null, "The following is a list of all the topics we cover in the MDN learning area.");
let div1 = React.createElement('div',null,paraOne);

let anchor1 = React.createElement('a',{href:"#",className:"anchors"},"Getting started with the web");
let paraTwo = React.createElement('p',null,"Provides a practical introduction to web development for complete beginners");
let div2 = React.createElement('div',{className:'contens'},anchor1,paraTwo);

let anchor2 = React.createElement('a',{href:"#",className:"anchors"},"HTML - Structuring the web");
let paraThree = React.createElement('p',null,"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. The topic teaches HTML in details.");
let div3 = React.createElement('div',{className:'contens'},anchor2,paraThree);

let anchor3 = React.createElement('a',{href:"#",className:"anchors"},"CSS - Styling the web");
let paraFour = React.createElement('p',null,"CSS is the langauge that we use to control our web content's style and layout, as well as adding behavior like animation. This topics provides comprehensive coverage of CSS.");
let div4 = React.createElement('div',{className:'contens'},anchor3,paraFour);

ReactDOM.render([heading, div1, div2, div3, div4],container);