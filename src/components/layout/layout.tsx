import React, { ReactNode } from 'react';
import Header from '../navigation/header';
import Footer from '../navigation/footer';

function Layout({children}: {children: ReactNode}) {

  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  );
}

export default Layout;