import * as React from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "styles/ThemeConfig";

const LocalStateContext = React.createContext<any>(null);
const LocalStateProvider = LocalStateContext.Provider;

export interface DarkModeType {
  value: boolean;
  toggle: boolean;
}
export const ToggleThemeStateProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <LocalStateProvider value={{ darkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalStateProvider>
  );
};

export const useToggle = () => {
  const all = React.useContext(LocalStateContext);
  return all;
};
