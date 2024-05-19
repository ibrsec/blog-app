import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

 
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#55423d',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#271c19',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });


theme.typography.h5 = {
  fontSize: '1.1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

    <ThemeProvider theme={theme}>


    <CssBaseline />
    <AppRouter />
    </ThemeProvider>
      </PersistGate>
    </Provider>
    <ToastContainer />
    </>
  );
}

export default App;
