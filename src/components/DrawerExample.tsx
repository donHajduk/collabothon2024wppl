'use client'
import React, {useState} from "react";
import Drawer from "@/components/Drawer";
import { getExchangeRateBetweenCurrencies } from "@/service/exchangeRateApiRead.service";
import { getCurrencyPairRateRecentChanges, getCurrencyPairScore } from "@/service/scoreCalculation.service";
import { getCurrencyNews } from "@/service/newsFeed.service";
import { getAllAccounts } from "@/service/accountsBalanceRead.service";


const DrawerExample = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);

    const handleToggle = async () => {
        const rate = await getExchangeRateBetweenCurrencies("EUR","PLN");
        console.log(rate);
        console.log(getCurrencyPairScore("EUR","PLN"));
        console.log(getCurrencyPairRateRecentChanges("EUR","PLN"));
        console.log(getCurrencyNews("USD"));
        console.log(getAllAccounts());
        setIsDrawerOpen(!isDrawerOpen);
    };
    const handleToggle2 = () => {
        setIsDrawerOpen2(!isDrawerOpen2);
    };

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <button onClick={handleToggle} className="bg-blue-500 text-white p-2 m-3">
                Otwórz Drawer
            </button>

            <button onClick={handleToggle2} className="bg-blue-500 text-white p-2 m-3">
                Otwórz Drawer 2
            </button>

            <Drawer open={isDrawerOpen} handleToggle={handleToggle} width="50%">
                text 2
            </Drawer>

            <Drawer open={isDrawerOpen2} handleToggle={handleToggle2} width="75%">
                Text
            </Drawer>

        </>
    )
}

export default DrawerExample;