import { Subscription } from '@/model/subscription.type';
import React, { useState } from 'react';

interface CurrencyData {
    currency: string;
    rate: number;
    previousRate: number;
    recommendationScore: number;
}

interface DashboardTilesProps {
    accounts: CurrencyData[];
    subscriptions: Subscription[];
    setSubscriptions: (subscriptions: Subscription[]) => void;
}

const DashboardTiles: React.FC<DashboardTilesProps> = ({ accounts, subscriptions, setSubscriptions}) => {

    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

    const openModal = (currency: string) => {
        setSelectedCurrency(currency);
    };

    const closeModal = () => {
        setSelectedCurrency(null);
    };

    return (
        <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            {accounts.map((account, index) => {
                // Calculate the change
                const change = account.rate - account.previousRate;
                const percentageChange = (change / account.previousRate) * 100;

                return (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-md transition-shadow relative"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-xl font-bold text-gray-700 flex gap-4">
                                EUR/{account.currency}

                                <span className="bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-full text-xs">
                                    Buy
                                </span>
                            </div>
                            {/* Notification Bell */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                                onClick={() => openModal(account.currency)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                                />
                            </svg>
                        </div>

                        <div className="flex items-center mb-4">
                            {/* Current rate */}
                            <span className="text-2xl font-bold text-black">{account.rate.toFixed(4)}</span>

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

                        <div className="space-y-2 grid grid-cols-2 gap-2">
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 bg-[#fbcb2d] col-span-2"
                            >
                                Loan
                                <span className="ml-2">→</span>
                            </div>
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 border-2 border-gray-900 col-span-1"
                            >
                                Exchange
                                <span className="ml-2">→</span>
                            </div>
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 border-2 border-gray-900 col-span-1"
                            >
                                Forex
                                <span className="ml-2">→</span>
                            </div>
                        </div>
                    </div>
                );
            })}

{selectedCurrency && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 shadow-lg relative max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">Subscribe for notifications</h2>
                        <p className="text-gray-700 mt-4">To be filled.</p>


                        <div className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 border-2 border-gray-900 col-span-1">
                                {subscriptions.find(subscription => subscription.currency === selectedCurrency && subscription.isActive) !== null ? "subscribe" : "unsubscribe"}
                                <span className="ml-2">→</span>
                            </div>

                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            &#10005; {/* Close Icon */}
                        </button>
                    </div>
                </div>
            )}  

        </div>
    );
};

export default DashboardTiles;
