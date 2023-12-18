import React from 'react';
import NavbarDefault from '../../Shared/Navbar/NavbarDefault';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavbarDefault></NavbarDefault>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;