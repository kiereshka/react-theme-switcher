import React from "react";

import sunMoon from "../assets/sun-moon.png";
import Header from "./Header.js";
import { ThemeContext } from "./ThemeContextProvider.js";

export default function Page() {
  const themeCtx = React.useContext(ThemeContext);

  return (
    <div id="app" className={themeCtx.theme}>
      <Header />
      <img src={sunMoon} alt="The Sun and the Moon" />
      <article>
        <h2>Extra dummy example website</h2>
        <p>Learning to work with themes (light, dark, etc). Looks great!</p>
      </article>
    </div>
  );
}
