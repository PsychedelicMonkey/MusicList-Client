import { PropsWithChildren } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
