import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Yellow from the logo
      
    },
    secondary: {
      main: '#000000', // Black from the logo
    },
    text: {
      primary: '#FFFFFF', // White for text
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;