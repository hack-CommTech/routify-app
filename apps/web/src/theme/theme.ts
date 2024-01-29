import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EFE2CD',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a98c5e',
    },
    background: {
      default: '#333',
      paper: '#111',
    },
  },
});
