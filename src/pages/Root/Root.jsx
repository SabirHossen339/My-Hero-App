import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div className='max-w-full'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Root;