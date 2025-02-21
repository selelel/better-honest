import React, { ReactNode } from 'react';
import Header from '../navigation/header';

function Layout({children}: {children: ReactNode}) {

  return (
    <>
    <Header/>
    {children}
    </>
  );
}

export default Layout;