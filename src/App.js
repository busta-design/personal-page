import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { RouteNavigation } from './constants/routeNavigation';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import Configuration from './container/configuration';
import i18next from 'i18next';
// import { Language } from './constants/languages';
import { STORAGE_DARK_THEME } from './constants/app';
import { CssBaseline } from '@material-ui/core';
import { useStateWithLocalStorage } from './hooks/useStateWithLocalStorage';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
// import Header from './container/header';

function App() {
  const [useDarkTheme, setUseDarkTheme] = useStateWithLocalStorage(
    STORAGE_DARK_THEME
  );

  const handleOnChangeTheme = isDark => setUseDarkTheme(`${isDark}`);
  const handleOnChangeLanguage = lang => i18next.changeLanguage(lang);

  const isDarkTheme = useDarkTheme === 'true';

  return (
    <div>
      <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <CssBaseline />
          <Suspense fallback="loading">
            {/* <Header /> */}
            <Switch>
              <Redirect
                exact
                from={RouteNavigation.Root}
                to={RouteNavigation.Home}
              />
              <Route exact path={RouteNavigation.Home} component={Home}></Route>
              <Route
                exact
                path={RouteNavigation.Thanks}
                component={Thanks}
              ></Route>
            </Switch>

            <Configuration
              isDarkTheme={isDarkTheme}
              onChangeLanguage={handleOnChangeLanguage}
              onChangeTheme={handleOnChangeTheme}
            />
          </Suspense>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
