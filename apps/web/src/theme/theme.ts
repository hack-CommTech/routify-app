import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EFE2CD',
    },
    info: {
      main: '#E4F5FF',
    },
    error: {
      main: '#FFD0D0',
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
