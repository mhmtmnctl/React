import React from "react";

const Jsx3 = () => {
  //commnet satırı
  /*
    multi 
    comment
    */

  const isAdmin = false;

  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Admin Menü</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>User Menü</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Jsx3;
