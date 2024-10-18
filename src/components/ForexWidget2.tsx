'use client'
import React, { useState } from "react";
import Drawer from "@/components/Drawer";
import ForexTable from "@/components/ForexTable";

function ForexWidget2() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className="relative bg-white p-4 rounded-lg shadow-md w-3/6">
            {/* Tytuł widgetu */}
            <div className="text-lg font-semibold mb-4">Foreign Exchange</div>

            {/* Ikona do otwierania konfiguracji */}
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleDrawer}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600 hover:text-gray-800"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>

            {/* Informacje o walutach */}
            <div className="flex items-center mb-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-sm">PLN 0.23 / -0.85%</span>
            </div>
            <div className="flex items-center mb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="text-sm">DOL 0,92 / - 0.09 %</span>
            </div>
            <div className="flex items-center mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm">CHF 1.06 / + 0.19 %</span>
            </div>

            {/* Drawer z konfiguracją */}
            <Drawer open={open} handleToggle={toggleDrawer} width={"50%"}>
                <ForexTable/>
            </Drawer>
        </div>
    );
}

export default ForexWidget2;
