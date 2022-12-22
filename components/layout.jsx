import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      
      <main>
        {children} 
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout