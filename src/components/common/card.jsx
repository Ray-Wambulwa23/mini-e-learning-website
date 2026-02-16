
import React from "react";
import './index.css'

const Card = ({ children, className = '', onClick }) => {
    return (
        <div
            className={`card ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;