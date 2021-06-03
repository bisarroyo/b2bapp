import React from 'react';

import Header from './Header/Header';

const Layout = (props) => {

  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
