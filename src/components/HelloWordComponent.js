import React, { useState } from "react";

export const HelloWordComponent = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default HelloWordComponent;
