import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@emotion/react'
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./global";
import { Snow } from "./Components/Snow";
import { Main } from "./View/Main";
import { Description } from "./View/Description";
import { Map } from "./View/Map";
import { Schedule } from "./View/Schedule";
import { Gift } from "./View/Gift";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    // <ThemeProvider theme={darkTheme}>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Snow />
      <Main />
    </ThemeProvider>
  );
}

export default App;
