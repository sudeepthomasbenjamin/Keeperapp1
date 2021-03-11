import React from "react";

function Footer() {
  var date = new Date();
  var yr = date.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {yr} </p>
    </footer>
  );
}

export default Footer;
