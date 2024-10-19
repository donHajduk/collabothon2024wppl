"use client";
import React, {useEffect, useState} from "react";
import MapChart from "./mapComponent/shared/map/Map";
import Drawer from "@/components/Drawer";
import NewsFeed from "./NewsFeed";
import DiversifiedProgressBar from "@/components/DiversifiedProgressBar";
import DashboardTiles, { CurrencyData } from "@/components/DashboardTiles";
import MainWidgetPosition from "./mainWidget/MainWidgetPosition";
import { Subscription } from "@/model/subscription.type";
import {getExchangeRateBetweenCurrencies} from "@/service/exchangeRateApiRead.service";

const defaultProducts: Array<CurrencyData> = [
  {
    currency: "USD",
    rate: 1.12,
    previousRate: 1.11,
    recommendationScore: 3,
    liked: true,
    change: 0.12,
  },
  {
    currency: "CHF",
    rate: 0.88,
    previousRate: 0.87,
    recommendationScore: 5,
    liked: true,
    change: 0.12,
  },
  {
    currency: "GBP",
    rate: 0.79,
    previousRate: 0.8,
    recommendationScore: 3,
    liked: true,
    change: 0.12,
  },
  {
    currency: "CNY",
    rate: 6.85,
    previousRate: 6.82,
    recommendationScore: 1,
    liked: false,
    change: 0.12,
  },
  {
    currency: "PLN",
    rate: 0.2,
    previousRate: 0.18,
    recommendationScore: 3,
    liked: false,
    change: 0.01,
  },
];

function ForexWidget() {
  const [open, setOpen] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[] | []>([]);

  const [products, setProducts] = useState<CurrencyData[] | []>(
    defaultProducts
  );

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const setLikedProduct = (currency: string) => {
    const newProducts = [...products].map((value) => {
      return { ...value };
    });
    const product = newProducts.find((value) => value.currency === currency);

    if (product) {
      product.liked = !product.liked;
    }
    setProducts(newProducts);
  };

    const syncRates = async () => {
        // const responses = await Promise.all());
        const updatedProducts = [];
        for(const prod of products){
            const product = {...prod};
            const response = await getExchangeRateBetweenCurrencies("EUR", prod.currency)
            product.rate = response as number;
            updatedProducts.push(product);
        }
        setProducts(updatedProducts);
    }

    useEffect(() => {
        syncRates();
    }, []);
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
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 text-black font-bold text-sm rounded-full">
              3
            </div>
          </div>
        </div>
        <div className="border-b mb-4"></div>
        <div className="space-y-4">
            {products
                .filter(value => value.liked)
                .map((value, position) => {
                    return <>
                        <MainWidgetPosition
                            key={value.currency}
                            score={value.recommendationScore}
                            valueChange={value.change}
                            comparedCurrency={value.currency}
                            currencyValue={value.rate}
                        />
                        {position !== products.length -1  && <div className="border-b"/>}
                    </>
                })}
          {/*<MainWidgetPosition*/}
          {/*  score={3}*/}
          {/*  valueChange={0.12}*/}
          {/*  comparedCurrency={"PLN"}*/}
          {/*  currencyValue={0.24}*/}
          {/*  currencyAccountBalance={"103.031,24 PLN"}*/}
          {/*/>*/}

          {/*<div className="border-b"></div>*/}
          {/*<MainWidgetPosition*/}
          {/*  score={1}*/}
          {/*  valueChange={0.12}*/}
          {/*  comparedCurrency={"DOL"}*/}
          {/*  currencyValue={1.03}*/}
          {/*  currencyAccountBalance={"1.021.213,21 DOL"}*/}
          {/*/>*/}
          {/*<div className="border-b"></div>*/}
          {/*<MainWidgetPosition*/}
          {/*  score={4}*/}
          {/*  valueChange={-1.12}*/}
          {/*  comparedCurrency={"CHF"}*/}
          {/*  currencyValue={1.44}*/}
          {/*  currencyAccountBalance={"211,123,91 DOL"}*/}
          {/*/>*/}
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
        <DashboardTiles
          accounts={products}
          subscriptions={subscriptions}
          setSubscriptions={setSubscriptions}
          setLikedProduct={setLikedProduct}
        />
        <NewsFeed />
        {/*<DiversifiedProgressBar2/>*/}
        {/*<DashboardTiles2/>*/}
        {/*<ForexTable/>*/}
        {/*<DonutChart/>*/}
      </Drawer>
    </>
  );
}

export default ForexWidget;
