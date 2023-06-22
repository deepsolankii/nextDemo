import { useMemo } from "react";
//
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";

// ----------------------------------------------------------------------

export default function Theme({ children }) {
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "light");

  const isLight = themeMode === "light";

  const theme = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
    }),
    [isLight]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
