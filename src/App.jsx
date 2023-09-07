import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateEx from "./assets/components/UseStateEx";
import UseReducerEx from "./assets/components/UseReducerEx";
import UseRefEx from "./assets/components/UseRefEx";
import UseContextEx from "./assets/components/UseContextEx";
import UseMemoEx from "./assets/components/UseMemoEx";
import UseCallbackEx from "./assets/components/UseCallbackEx";

function App() {
  return (
    <>
      <div></div>
      <UseStateEx />
      <UseReducerEx />
      <UseRefEx />
      <UseContextEx />
      <UseMemoEx />
      <UseCallbackEx />
    </>
  );
}

export default App;
