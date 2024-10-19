"use client";
import React, { useState } from "react";
import MapChart from "./mapComponent/shared/map/Map";
import Drawer from "@/components/Drawer";
import NewsFeed from "./NewsFeed";
import DiversifiedProgressBar from "@/components/DiversifiedProgressBar";
import DashboardTiles from "@/components/DashboardTiles";
import MainWidgetPosition from "./mainWidget/MainWidgetPosition";

function ForexWidget() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="relative  sm:min-w-full sm:w-auto md:min-w-fit p-6 bg-white rounded-lg shadow-md md:w-3/6  hover:shadow-lg hover:bg-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={toggleDrawer}
      >
        <MapChart />
        <div className="flex justify-start items-center mb-4">
          <div className="text-xl font-bold">Foreign exchange</div>
          <div className="flex items-center space-x-2 ml-5">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 text-black font-bold text-sm rounded-full">
              3
            </div>
          </div>
        </div>
        <div className="border-b mb-4"></div>
        <div className="space-y-4">
          <MainWidgetPosition
            score={3}
            valueChange={0.12}
            comparedCurrency={"PLN"}
            currencyValue={0.24}
            currencyAccountBalance={"103.031,24 PLN"}
          />

          <div className="border-b"></div>
          <MainWidgetPosition
            score={1}
            valueChange={0.12}
            comparedCurrency={"DOL"}
            currencyValue={1.03}
            currencyAccountBalance={"1.021.213,21 DOL"}
          />
          <div className="border-b"></div>
          <MainWidgetPosition
            score={4}
            valueChange={-1.12}
            comparedCurrency={"CHF"}
            currencyValue={1.44}
            currencyAccountBalance={"211.123,91 CHF"}
          />
        </div>
      </div>
      {/* Drawer z konfiguracją */}
      <Drawer open={open} handleToggle={toggleDrawer} width={"50%"}>
        <DiversifiedProgressBar
          accounts={[
            {
              currency: "USD",
              iban: "US12345678901234567890",
              balance: 11000.5,
            },
            {
              currency: "GBP",
              iban: "DE12345678901234567890",
              balance: 22500.75,
            },
            {
              currency: "CHF",
              iban: "GB12345678901234567890",
              balance: 31500.0,
            },
            {
              currency: "CNY",
              iban: "PL12345678901234567890",
              balance: 43000.0,
            },
            {
              currency: "AUD",
              iban: "AU12345678901234567890",
              balance: 5800.0,
            },
          ]}
        />
        <NewsFeed />
        <DashboardTiles
          accounts={[
            {
              currency: "USD",
              rate: 1.12,
              previousRate: 1.11,
              recommendationScore: 5,
            },
            {
              currency: "CHF",
              rate: 0.88,
              previousRate: 0.87,
              recommendationScore: 3,
            },
            {
              currency: "GBP",
              rate: 0.79,
              previousRate: 0.8,
              recommendationScore: 4,
            },
            {
              currency: "CNY",
              rate: 6.85,
              previousRate: 6.82,
              recommendationScore: 2,
            },
            {
              currency: "CHF",
              rate: 0.88,
              previousRate: 0.87,
              recommendationScore: 3,
            },
            {
              currency: "GBP",
              rate: 0.79,
              previousRate: 0.8,
              recommendationScore: 4,
            },
            {
              currency: "CNY",
              rate: 6.85,
              previousRate: 6.82,
              recommendationScore: 2,
            },
          ]}
        />
        {/*<DiversifiedProgressBar2/>*/}
        {/*<DashboardTiles2/>*/}
        {/*<ForexTable/>*/}
        {/*<DonutChart/>*/}
      </Drawer>
    </>
  );
}

export default ForexWidget;
