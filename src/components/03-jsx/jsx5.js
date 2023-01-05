import React from "react";

const Jsx5 = () => {
  const names = ["ali", "veli", "ayse", "fatma"];
  const cities = ["ist", "izm", "lond", "paris"];
  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
