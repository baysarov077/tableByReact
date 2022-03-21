import React from "react";

const TdInner = ({id, name, price, left, image}) => {
  return (
    <tr className="tbElement">
      <td><img src={image} alt="none" /></td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{left}</td>
    </tr>
  );
};

export default TdInner;