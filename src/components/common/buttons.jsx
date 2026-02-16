import React from "react";
import './index.css'

const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button ${variant}`}
        >
            {children}   
        </button>
    );
};

export default Button;