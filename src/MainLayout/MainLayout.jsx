import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <nav className='sticky top-0 z-50 bg-white shadow-sm'>
                <Navbar></Navbar>
            </nav>
            <aside className='flex-1'>
                <Outlet></Outlet>
            </aside>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;