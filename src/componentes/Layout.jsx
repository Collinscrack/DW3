import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main >
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;