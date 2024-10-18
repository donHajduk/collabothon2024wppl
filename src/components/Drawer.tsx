"use client";
import React, { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  handleToggle: () => void;
  width: "50%" | "75%";
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  handleToggle,
  width,
  children,
}) => {
  const layerWidth = width === "50%" ? "w-1/2" : "w-3/4";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        } ${layerWidth}`}
      >
        <div className="p-4 h-full flex flex-col">
          <button
            onClick={handleToggle}
            className="text-gray-600 hover:text-gray-800"
          >
            Zamknij
          </button>
          <div className="mt-4 flex-1 overflow-y-auto">
            {/* Zawartość drawera */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
