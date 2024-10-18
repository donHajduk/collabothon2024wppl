import React from "react";
import MapChart from "./mapComponent/shared/map/Map";

function ForexWidget() {
  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-md w-3/6  hover:shadow-lg hover:bg-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Foreign exchange</div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12H8m8-4H8m8 8H8m-2 4a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>

          <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 text-black font-bold text-sm rounded-full">
            3
          </div>
        </div>
      </div>
      <div className="border-b mb-4"></div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <span className="text-sm font-bold">42%</span>
            </div>
            <span className="ml-3">EUR/PLN</span>
          </div>
          <div className="text-sm font-medium">0,24 EUR / + 0,12 %</div>
        </div>

        <div className="border-b"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <span className="text-sm font-bold">42%</span>
            </div>
            <span className="ml-3">EUR/DOL</span>
          </div>
          <div className="text-sm font-medium">1,03 EUR / + 0,12 %</div>
        </div>

        <div className="border-b"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <span className="text-sm font-bold">42%</span>
            </div>
            <span className="ml-3">EUR/CHF</span>
          </div>
          <div className="text-sm font-medium">1,44 EUR / - 1,12 %</div>
        </div>
      </div>
      <MapChart />
    </div>
  );
}

export default ForexWidget;
