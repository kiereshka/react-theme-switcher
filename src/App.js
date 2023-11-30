import "./styles.css";

import Page from "./components/Page.js";
import ThemeContextProvider from "./components/ThemeContextProvider.js";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
