import React from 'react';
import { } from 'react-helmet';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      {/* <h2>Layout</h2> */}
      {children}
    </div>
  );
};

export default Layout;
