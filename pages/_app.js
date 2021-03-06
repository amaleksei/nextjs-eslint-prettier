import React from 'react';
import PropTypes from 'prop-types';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component pageProps={pageProps} />;
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default appWithTranslation(MyApp);
