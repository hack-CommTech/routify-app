'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { theme } from '@/theme/theme';

export const ThemeRegistry = (props: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
