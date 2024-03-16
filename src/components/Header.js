import React from "react";

function Header({ money, total }) {
  return (
    <>
      <div className="header">Balance: ${money - total}</div>

      <style jsx>{`
        .header {
          position: stickey;
          top: 0;
          background: linear-gradient(to bottom, blue, lightblue);
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
}

export default Header;
