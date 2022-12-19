import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Dapa Dogz - Designer Inspired Fashion</title>
      </Head>
      <main className="main__container">
        {children}
      </main>
    </div>
  )
}

export default layout