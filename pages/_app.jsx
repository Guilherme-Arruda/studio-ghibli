import AppProvider from '../context/AppContext';
import GlobalStyle from '../styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
