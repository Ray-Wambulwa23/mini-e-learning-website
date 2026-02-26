import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Layout = ({ children }) => {
    const location = useLocation();
    
    return (
        <div className="layout">
            <header className="header">
                <div className="header-content">
                    <Link to="/" className="app-title-link">
                        <h1 className="app-title">Student E-learning Portal</h1>
                    </Link>
                    <nav className="header-nav">
                        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                            Courses
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>  
    );
};

export default Layout;

