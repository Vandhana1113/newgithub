import React from "react";

function Cards({ label, value, bg, className, icon }) {
    return (
        <div className={`p-4 rounded-lg shadow ${bg} flex items-center justify-between`}>
            <div>
                <div className={`text-sm font-medium ${className}`}>{label}</div>
                <div className="text-xl font-bold">{value}</div>
            </div>
            {icon && <div className="ml-4">{icon}</div>}
        </div>
    );
}

export default Cards;
