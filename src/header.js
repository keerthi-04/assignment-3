import React from "react";

function Header(props) {
  return (
    <div>
      <h1>This is header taken by Me {props.name}..!</h1>
      {props.children}
    </div>
  );
}

export default Header;
