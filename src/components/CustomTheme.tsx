import React, { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const activeIcon = {
  light: <LightModeIcon />,
  dark: <NightlightRoundIcon />,
};

interface IThemeContext {
  handleTheme: () => void;
  theme: any;
  color?:string
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export default function CustomTheme({ children }: any) {
  const m = window.localStorage.getItem("theme");
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (m === "light") {
      return "light";
    }
    if (m === "dark") {
      return "dark";
    }
    return "light";
  });

  const handleTheme = () => {
    setMode((mode) => {
      if (mode === "light") {
        window.localStorage.setItem("theme", "dark");
        return "dark";
      }
      window.localStorage.setItem("theme", "light");
      return "light";
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider
      value={{
        handleTheme,
        theme: activeIcon[mode],
        color:theme.palette.primary.main
      }}
    >
      <ThemeProvider theme={theme} >{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
