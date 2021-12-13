import React from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Meta />
    <main>
      <Navbar />
      {children}
    </main>
  </>
);

export default Layout;