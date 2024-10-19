import React from 'react';
import Image from "next/image";
import currency_chart from "./currency_chart.png";

interface CurrencyData {
    currency: string;
    rate: number;
    previousRate: number; // Added to store the previous rate
    products: string[];
    recommendationScore: number;
}

const currencyData: CurrencyData[] = [
    { currency: 'USD', rate: 1.12, previousRate: 1.11, products: ['Forex'], recommendationScore: 5 },
    { currency: 'CHF', rate: 0.88, previousRate: 0.87, products: ['Forex'], recommendationScore: 3 },
    { currency: 'GBP', rate: 0.79, previousRate: 0.80, products: ['Forex'], recommendationScore: 4 },
    { currency: 'CNY', rate: 6.85, previousRate: 6.82, products: ['Forex'], recommendationScore: 2 },
];

// Sort by recommendationScore
currencyData.sort((a, b) => b.recommendationScore - a.recommendationScore);


const DashboardTiles2: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-8 p-4 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
            {currencyData.map((currency, index) => {
                // Calculate the change
                const change = currency.rate - currency.previousRate;
                const percentageChange = (change / currency.previousRate) * 100;

                return (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-md transition-shadow relative"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-xl font-bold text-gray-700">EUR/{currency.currency}</div>
                            {/* Notification Bell */}
                        </div>

                        <div className="flex items-center mb-4">
                            {/* Current rate */}
                            <span className="text-2xl font-bold text-black">{currency.rate.toFixed(4)}</span>

                            {/* Change in value */}
                            <span
                                className={`ml-2 text-xs font-semibold ${
                                    change > 0 ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {change > 0 ? '+' : ''}
                                {change.toFixed(4)} ({percentageChange.toFixed(2)}%)
                            </span>

                            {/* Up/Down arrow */}
                            {change > 0 ? (
                                <span className="ml-1 text-green-600">▲</span>
                            ) : (
                                <span className="ml-1 text-red-600">▼</span>
                            )}
                        </div>

                        {/* Votum (Recommendation) */}
                        <div className="absolute top-8 right-8">
                            <span className="bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-full text-xs">
                                Buy
                            </span>
                        </div>

                        {/*<div className={"py-4"}>*/}
                        {/*    <Image src={currency_chart} alt={"img"} />*/}
                        {/*</div>*/}
                        <div className="space-y-2">
                            {currency.products.map((product, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center gap-2 bg-[#fbcb2d] text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105"
                                >
                                    {product}
                                    <span className="ml-2">→</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardTiles2;
