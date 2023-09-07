import React, { useState, useMemo } from "react";

function ExpensiveComponent({ data }) {
  const computedResult = useMemo(() => {
    return data.reduce((total, item) => total + item, 0);
  }, [data]); // recomputes only when data changes

  return (
    <div>
      <h2>Expensive Component</h2>
      <p>Computed Result: {computedResult}</p>
    </div>
  );
}

function UseMemoEx() {
  const [data, setData] = useState([1, 2, 3, 4, 5]); //15

  const updateData = () => {
    setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //55
  };

  return (
    <div>
      <h2>useMemo Hook </h2>
      <button onClick={updateData}>Update Data</button>
      <ExpensiveComponent data={data} />
    </div>
  );
}

export default UseMemoEx;
