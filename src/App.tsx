import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './domain';
import { GlobalStyles } from 'assets';

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <div>app</div>
      </ThemeProvider>
    </Router>
  );
};
