import React from "react";

const Jsx4 = () => {
  const age = 10;

  return (
    <div>
      {age >= 18 && <h1>Ehliyet Alabilir</h1>}
      {age >= 18 || <h1>Ehliyet alamaz</h1>}
    </div>
  );
};

export default Jsx4;
