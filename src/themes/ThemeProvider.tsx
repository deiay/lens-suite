import { darkTheme } from "./themes";
import React, { ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyle";
import { ThemeProvider as _ThemeProvider } from "styled-components";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    // Light mode isn't supported yet so we default to dark always
    // @ts-ignore
    <_ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </_ThemeProvider>
  );
};
