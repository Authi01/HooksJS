import React, { useRef } from "react";

function UseRefEx() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "hello";
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Use ref Hook</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      {/* <div>{inputRef.current.value}</div> */}
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefEx;
