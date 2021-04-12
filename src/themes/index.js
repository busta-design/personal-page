import { createMuiTheme } from '@material-ui/core/styles';

const typography = {
  color: '#333333',
  fontFamily: 'Quicksand',
  h1: {
    fontFamily: 'Bangers, cursive',
  },
  h2: {
    fontFamily: 'Bangers, cursive',
  },
  h3: {
    fontFamily: 'Bangers, cursive',
  },
};

export const darkTheme = createMuiTheme({
  shadows: ['none'],
  typography,
  palette: {
    type: 'dark',
    primary: {
      main: '#3f50b5',
    },
  },
  root: {
    textDecoration: 'none',
  },
  text: {
    primary: '#333333',
  },
});

export const lightTheme = createMuiTheme({
  shadows: ['none'],
  typography,
  palette: {
    type: 'light',
    primary: {
      main: '#3f50b5',
    },
  },
  root: {
    textDecoration: 'none',
  },
  text: {
    primary: '#333333',
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: 'white',
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor: 'white',
      },
    },
  },
});
