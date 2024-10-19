"use client";
import React, { useEffect } from "react";

const Drawer: React.FC<DrawerProps> = ({
  open,
  handleToggle,
  width,
  children,
}) => {
  const layerWidth = width === "50%" ? "w-1/2" : "w-3/4";

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up by removing the class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

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
        className={`fixed inset-y-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 pb-16 z-20 w-full xl:w-1/2 ${
          open ? "translate-x-0" : "translate-x-full"
        } ${layerWidth}`}
      >
        {/* Action Buttons */}
        <div className="flex justify-between items-center p-4 border-b">
          <div onClick={handleToggle} className="flex items-center space-x-2">
            {/* Close Button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>Close</span>
          </div>

          <div className="flex items-center space-x-4">
            <button className=" bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors">
              Buy / Sell
            </button>

            <button className="relative flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
              <span>Notifications</span>
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-4 overflow-y-auto h-full">
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
