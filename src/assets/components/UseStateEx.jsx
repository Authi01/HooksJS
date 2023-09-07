import React, { useState } from "react";

function UseStateEx() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Use State Example</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type Here"
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default UseStateEx;
