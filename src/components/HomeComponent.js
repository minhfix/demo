import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelloWordComponent from "./HelloWordComponent";

export const HomeComponent = () => {
  const [textHello, setTextHello] = useState("Hello, World (Home page)");
  return (
    <div>
      <HelloWordComponent text={textHello} />
      <p>
        <Link to="/functionComp">Function Component</Link>
      </p>
      <p>
        <Link to="/classComp">Class Component</Link>
      </p>
    </div>
  );
};

export default HomeComponent;
