import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksItems = links.map(link => <a key={link}>{link}</a>);

  
  return (<nav>
  {linksItems}
  </nav>);
}

export default NavBar;
