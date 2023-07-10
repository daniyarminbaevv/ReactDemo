import React, { useState, useEffect } from "react";

const SmartInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div>
      <label>Smart Input</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default SmartInput;
