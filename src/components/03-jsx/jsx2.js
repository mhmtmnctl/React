import React from "react";

const Jsx2 = () => {
  const user = {
    name: "Ali gel",
    email: "ali@gel.com",
    occupation: "Developer",
  };

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>occupation: {user.occupation}</div>
    </div>
  );
};

export default Jsx2;
