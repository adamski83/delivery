"use client";

import createEmotionCache from "@/lib/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b9c3c",
    },
    secondary: {
      main: "#fb6c08",
    },
    background: {
      default: "#f6f6f6",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

const clientSideEmotionCache = createEmotionCache();

interface ThemeProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export const ThemeProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeProviderProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </CacheProvider>
  );
};
