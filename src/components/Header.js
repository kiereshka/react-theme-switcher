import React from "react";

import { ThemeContext } from "./ThemeContextProvider.js";

export default function Header() {
  const themeCtx = React.useContext(ThemeContext);

  return (
    <header>
      <h1>Demo website</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
}
