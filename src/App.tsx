import "./styles.css";
// import Snake from "./Snake.ts";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const redSnake = new Snake("red");
    const blueSnake = new Snake("blue");
    redSnake.move(5);
    redSnake.turn(1);
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    display("Red snakes current position is:", redSnake.position, ".");
    display("Blue snakes current position is:", blueSnake.position, ".");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
