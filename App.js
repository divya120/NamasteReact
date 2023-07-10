// const heading = React.createElement("h1",{id : "h1-element", abc:"xyz"}, "Hello world using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);

// * * Important: Creating a nested element:
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is H1 tag")
//   )
// );

// * * Important: Creating a sibling element:
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an H1 element"),
//     React.createElement("h2", {}, "Im an H2 element"),
//   ])
// );

// * * Important: Creating a complicated structure:
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("p", { id: "paragraph" }, [
      React.createElement("p", { id: "Img" }, "This is text for img"),
      React.createElement("b", {}, "This is the bold text"),
    ]),
    React.createElement("h1", {}, "This is the h1 tag"),
    React.createElement("h2", {}, "This is alternative"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is the h1 tag"),
    React.createElement("h2", {}, "This is alternative"),
  ]),
]);

root.render(parent);
