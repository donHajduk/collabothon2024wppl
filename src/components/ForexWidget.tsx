"use client";
import React, {useState} from "react";
import MapChart from "./mapComponent/shared/map/Map";
import ForexTable from "@/components/ForexTable";
import Drawer from "@/components/Drawer";
import NewsFeed from "./NewsFeed";
import {ScoreIndicator} from "./ScoreIndicator";
import DiversifiedProgressBar from "@/components/DiversifiedProgressBar";
import DashboardTiles from "@/components/DashboardTiles";
import DashboardTiles2 from "@/components/DashboardTiles2";
import DiversifiedProgressBar2 from "@/components/DiversifiedProgressBar2";


function ForexWidget() {
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <div
                className="relative max-w-md p-6 bg-white rounded-lg shadow-md w-3/6  hover:shadow-lg hover:bg-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleDrawer}
            >
                <MapChart/>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold">Foreign exchange</div>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                            />
                        </svg>
                        <div
                            className="flex items-center justify-center w-6 h-6 bg-yellow-400 text-black font-bold text-sm rounded-full">
                            3
                        </div>
                    </div>
                </div>
                <div className="border-b mb-4"></div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <ScoreIndicator value={3}/>
                            <span className="ml-5">EUR/PLN</span>
                        </div>
                        <div className="text-sm font-medium text-green-500">
                            0,24 EUR / + 0,12 %
                        </div>
                    </div>

                    <div className="border-b"></div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <ScoreIndicator value={1}/>
                            <span className="ml-5">EUR/DOL</span>
                        </div>
                        <div className="text-sm font-medium text-green-500">
                            1,03 EUR / + 0,12 %
                        </div>
                    </div>

                    <div className="border-b"></div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <ScoreIndicator value={4}/>
                            <span className="ml-5">EUR/CHF</span>
                        </div>
                        <div className="text-sm font-medium text-red-500">
                            1,44 EUR / - 1,12 %
                        </div>
                    </div>
                </div>
            </div>
            {/* Drawer z konfiguracją */}
            <Drawer open={open} handleToggle={toggleDrawer} width={"50%"}>
                <DiversifiedProgressBar/>
                <NewsFeed/>
                <DashboardTiles/>
                {/*<DiversifiedProgressBar2/>*/}
                {/*<DashboardTiles2/>*/}
                {/*<ForexTable/>*/}
                {/*<DonutChart/>*/}
            </Drawer>
        </>
    );
}

export default ForexWidget;
