import React from "react";
import './index.css';

const Layout = ({ children, title }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="header-content">
                    <h1 className="app-title">Student E-learning Portal</h1>
                    {title && <h2 className="page-title">{title}</h2>}
                </div>
            </header>

            <nav className="breadcrumbs">
                {/* will add later*/}
            </nav>

            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>  
    );
};

export default Layout;

