import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./component/ClassComp";
import FuncComp from "./component/FuncComp";
import EventComp from "./component/Event";
import ConditionalRendering from "./component/ConditionalRendering";
import Parent from "./component/Parent";
import List from "./component/List";
import LifeCycleMethods from "./component/LifeCycleMethods";

function App() {
  return (
    <>
      {/* <h2>This is a react demo</h2> */}
      {/* <ClassComp name={"prathamesh"} /> */}
      {/* <FuncComp age={20} city={"pune"} /> */}
      {/* <EventComp></EventComp> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Parent name={"xyz"}></Parent> */}
      {/* <List></List> */}
      <LifeCycleMethods color={"green"}></LifeCycleMethods>
    </>
  );
}
// there are two types of component in react
// 1. Class based components.
// 2. Function based components.

//virtual DOM
// when a page is loaded in the browser , browser creates a DOM
//when the web page is having many elements, then the DOM tree will be large
//any changes to one of the element, will requiree that browser will parse the tree to reflect those changes

// React implements the concept of virtual DOM
// It is copy of real DOM
// whenever any changes occur, react will compare it with the copy of actual DOM to identify the difference
// VDOM will change when the state of an component changes.
export default App;
