import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Recreate when count changes

  console.log("handle click", handleClick);
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Increment Count</button>
    </div>
  );
}

function UseCallbackEx() {
  return (
    <div>
      <h2>useCallback Hook</h2>
      <ParentComponent />
    </div>
  );
}

export default UseCallbackEx;
