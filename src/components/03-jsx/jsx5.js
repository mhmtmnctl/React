import React from "react";

const Jsx5 = () => {
  const names = ["ali", "veli", "ayse", "fatma"];
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jsx5;
