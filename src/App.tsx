import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobatStyle } from "./styles/themes/global";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hello World</div>
      <GlobatStyle />
    </ThemeProvider>
  );
}

export default App;
