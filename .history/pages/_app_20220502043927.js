import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layoutout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
