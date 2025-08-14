import React, { useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

function Statusdropdown({ selected, onSelect }) {
    const [open, setOpen] = useState(false);
    const statusOptions = ["All Status", "Paid", "Due", "Not Due"];

    return (
        <div className="relative w-48">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between border px-4 py-2 rounded-md bg-white w-full"
            >
                <span>{selected}</span>
                <FaChevronDown className="ml-2 text-gray-500" />
            </button>

            {open && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
                    {statusOptions.map((status, value) => (
                        <li
                            key={value}
                            onClick={() => {
                                onSelect(status);
                                setOpen(false);
                            }}
                            className="group flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <FaCheck className="text-black mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            <span>{status}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Statusdropdown;
