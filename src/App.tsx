import React from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import SmartInput from "./components/SmartInput/SmartInput";
import Products from "./components/Products/Products";
// import TicTacToe from ".//components/TicTacToe/TicTacToe";

function App() {
  const fruits = ["apple", "babble", "sabble"];
  const n = 1;
  return (
    <div>
      {/* <TicTacToe />
      <SmartInput /> */}
      <Products />
    </div>
  );
}

export default App;
