import React from "react";

function Header({ money, total }) {
  return (
    <>
      <div>Balance: ${money - total}</div>
    </>
  );
}

export default Header;
