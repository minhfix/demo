import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const FunctionComponent = () => {
  const [textHello, setTextHello] = useState(
    "Hello, World! (Function Component)"
  );

  //   useEffect(() => {
  //     setTextHello("Hello, Guy!");
  //     return () => {};
  //   }, []);

  return (
    <div>
      <h1>{textHello}</h1>
      <Link to="/">Back </Link>
    </div>
  );
};

export default FunctionComponent;
