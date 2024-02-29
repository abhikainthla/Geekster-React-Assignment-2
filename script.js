const title = React.createElement('h1',{id: 'title'},'Topics covered');
const para1 = React.createElement('p',{id:'Para'}, 'The following is a list of all the topics we cover in the MND learning area.');
const link1 = React.createElement('a',{href:"#"}, 'Getting started with the web');
const para2 = React.createElement('p',{id:'myPara'}, 'Provide a practical introduction to web development for complete beginners.');
const link2 = React.createElement('a',{href:"#"}, 'HTML -- Structuring the web');
const para3 = React.createElement('p',{id:'myPara'}, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');
const link3 = React.createElement('a',{href:"#"}, 'CSS -- Styling the web');
const para4 = React.createElement('p',{id:'myPara'}, 'CSS is the language that we use to control our web content\'s style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS.');
ReactDOM.render(React.createElement('div',{id:'main'},[title, para1, link1, para2, link2, para3, link3,para4]),document.getElementById("root"));
