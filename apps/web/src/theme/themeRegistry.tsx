'use client';

import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { darkTheme, lightTheme } from '@/theme/theme';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ThemeRegistry = (props: { children: React.ReactNode }) => {
  const prefersInit = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const [mode, setMode] = React.useState<'light' | 'dark'>(prefersInit);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  React.useEffect(() => {
    setMode(prefersInit);
  }, [prefersInit]);

  const theme = React.useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
