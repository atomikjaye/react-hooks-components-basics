import React from "react";
import Article from "./Article";
import Comment from "./Comment";

const Button = props => {
  console.log(props)
  // Testing somrthing from React Docs https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
  const { kind, ...other } = props;
  const className = kind === "second" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};


function App() {
  return (
    <div>
      <Article />
      <Comment />
      <Button kind="primary" keys="keyss" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
}

export default App;
