import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className='max-w-full'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;