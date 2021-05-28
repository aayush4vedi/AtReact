import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import * as Fathom from 'fathom-client';
import '@fontsource/inter/400.css';

import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import customTheme from '../styles/theme';

import SEO from '../next-seo.config';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //enable trackign only in production 
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['fastfeedback.io']
      });
    }
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
