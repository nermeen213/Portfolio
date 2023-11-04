import React from 'react'
import Style from './Layout.module.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


export default function Layout() {
    

    return <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
}
