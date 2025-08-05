import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import React from 'react'

const DashboardLayout = () => {
    return (
            <div> 
                <div className="flex">
                <Navbar />
                </div>
                <main>
                    < Outlet />
                </main>
                < Footer />
            </div>
    )
}

export default DashboardLayout
