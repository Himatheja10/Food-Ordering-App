const parent = React.createElement("div",{id : "parent"},[
React.createElement("div",{id : "child1"},[
 React.createElement("h1",{},"Nested Elements"),
   React.createElement("h2",{},"Nested Elements h2")
  ]),
  React.createElement("div",{id : "child2"},[
    React.createElement("h1",{},"Nested Elements"),
    React.createElement("h2",{},"Nested Elements h2")
  ])
]);
  
    console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);