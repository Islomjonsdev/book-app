import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import "./Layout.scss"

const Layout = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Outlet />
    </div>
  )
}

export default Layout