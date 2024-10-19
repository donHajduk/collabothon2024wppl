import React from 'react';

interface CurrencyData {
    currency: string;
    rate: number;
    previousRate: number;
    recommendationScore: number;
}

interface DashboardTilesProps {
    accounts: CurrencyData[];
}

const DashboardTiles: React.FC<DashboardTilesProps> = ({ accounts }) => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
            {accounts.map((account, index) => {
                // Calculate the change
                const change = account.rate - account.previousRate;
                const percentageChange = (change / account.previousRate) * 100;

                return (
                    <div
                        key={index}
                        className="bg-white px-8 py-2 rounded-lg  transition-shadow relative"
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

                        <div className=" grid grid-cols-6 gap-2 justify-end -mt-8">
                            <div className="col-span-3"></div>
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 "
                            >
                                Loan
                                <span className="ml-2">→</span>
                            </div>
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105  "
                            >
                                Exchange
                                <span className="ml-2">→</span>
                            </div>
                            <div
                                className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 "
                            >
                                Forex
                                <span className="ml-2">→</span>
                            </div>
                        </div>
                         <hr className={'mt-4'}/>
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardTiles;
