import React from "react";
import ReactDOM from "react-dom";

// // const heading = React.createElement("h1",{id : "h1-element", abc:"xyz"}, "Hello world using React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // console.log(heading);
// // root.render(heading);

// // * * Important: Creating a nested element:
// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement(
// //     "div",
// //     { id: "child" },
// //     React.createElement("h1", {}, "This is H1 tag")
// //   )
// // );

// // * * Important: Creating a sibling element:
// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "I'm an H1 element"),
// //     React.createElement("h2", {}, "Im an H2 element"),
// //   ])
// // );

// // * * Important: Creating a complicated structure:
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("p", { id: "paragraph" }, [
//       React.createElement("p", { id: "Img" }, "This is text for img"),
//       React.createElement("b", {}, "This is the bold text"),
//     ]),
//     React.createElement("h1", {}, "This is the h1 tag"),
//     React.createElement("h2", {}, "This is alternative"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is the h1 tag"),
//     React.createElement("h2", {}, "This is alternative"),
//   ]),
// ]);

// root.render(parent);


// * IMPORTANT: The above code is for the demo purpose now let's start Episode 03
// JSX

const jsxHeading = (<h1 className="Heading"> This is React Element </h1>);

// const Title = () =>{
//     return <h1> Namaste React</h1>
// };
// const HeadingComponent = () =>{
//     return <div className="container">
//     <Title/>
//      <h1>Namaste React Functional Component</h1>
//      </div>
// };

// * React element:
const heading = <h1 className="heading" typeof="element">Namaste React</h1>

const Title = () => <h1> Namaste React</h1>
const HeadingComponent = () =><div className="container">
    <Title/>
     <h1>Namaste React Functional Component</h1>
     </div>

// Element inside a component
const elem = <h1> This is an element</h1>

const FunctionalComponent = () =>(
    <div>
        <h1>This is the Functional Component</h1>
    {elem}
    </div>
);

// Usage of {} inside a component or an element
const HeadingComponent1 = () =>{
    return <h1> {2+3}</h1>
};

// Component inside a react element

const ComponentToBeInserted = () =>{
    return <h1> This the component inserted</h1>
}

const reactElement = <p><ComponentToBeInserted/></p>

// elemnet inside and element
const elementToBeInserted = <p>This is the element to be inserted</p>
const elementToBeInsertedIn = (
<React.Fragment>
<p>{elementToBeInserted}</p>
<h1>The element is inserted here</h1>
</React.Fragment>)

// Component inside a component
const ComponentToBeInserted1 = () => <h1>The component to be inserted</h1>;
const ComponentToBeInsertedInto = () => {
    return(
        <div>
            <p>The component is inserted here</p>
            <h1>{ComponentToBeInserted1()}</h1>
        </div>
    )
}

// Infinite Loop
const loop1 = () =>{
    <div>
        <h1> This is the first component</h1>
        <loop2/>
    </div>
}
const loop2 = () =>{
    <div>
        <loop1/>
        <h1> This is loop 2</h1>
    </div>
}

// Other JSX stuff
const Componentnow = ()=>(
    <>
    <p>This is it</p>
    <h1>This is not</h1>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(jsxHeading);
// root.render(<HeadingComponent/>);
root.render(<FunctionalComponent/>);
root.render(<HeadingComponent1/>);
root.render(reactElement);
root.render(elementToBeInsertedIn);
root.render(ComponentToBeInsertedInto())
root.render(loop2())
root.render(Componentnow())

