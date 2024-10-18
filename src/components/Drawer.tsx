'use client'
import React from 'react';

interface DrawerProps {
    open: boolean;
    handleToggle: () => void;
    width: '50%' | '75%';
    children: any
}

const Drawer: React.FC<DrawerProps> = ({ open, handleToggle, width, children}) => {
    const layerWidth = width === '50%' ? 'w-1/2' : 'w-3/4';

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                    open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleToggle}
            />

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                } ${layerWidth}`}
            >
                <div className="p-4">
                    <button
                        onClick={handleToggle}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        Zamknij
                    </button>
                    <div className="mt-4">
                        {/* Zawartość drawera */}
                        {/*<p>To jest treść drawera.</p>*/}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;
