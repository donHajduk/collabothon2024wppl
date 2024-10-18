import React from "react";

function ForexWidget() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-3/6">
      <div className="text-lg font-semibold mb-4">Foreign Exchange</div>

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
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12H8m4 4H8m8-8H8m8-4H8m8 12H8m8-16H8m8-4H8"
            ></path>
          </svg>
        </div>

        <div className="group flex items-center">
          <span className="w-5 h-5 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-semibold text-xs">
            ?
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Tooltip
          </span>
        </div>
      </div>
    </div>
  );
}

export default ForexWidget;
