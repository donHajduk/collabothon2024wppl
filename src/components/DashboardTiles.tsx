import { Subscription } from '@/model/subscription.type';
import React, { useState } from 'react';
import {ScoreIndicator} from "@/components/ScoreIndicator";

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
    const [percentageFall, setPercentageFall] = useState('');
    const [exchangeRateFall, setExchangeRate] = useState('');
    const [notificationMethods, setNotificationMethods] = useState({
      sms: false,
      mail: false,
      push: false,
    });
  
    const handleCheckboxChange = (method: string) => {
      setNotificationMethods((prevMethods) => ({
        ...prevMethods,
        [method]: !prevMethods[method],
      }));
    };
  
    const handleSubmit = () => {
      
        //TODO: zmiana stanu

      const selectedMethods = Object.keys(notificationMethods).filter(
        (method) => notificationMethods[method as keyof typeof notificationMethods]
      );

      const subscription = subscriptions.find(subscription => subscription.currency == selectedCurrency);

      if(subscription) {
        //remove subscription
        setSubscriptions(subscriptions.filter(sub => sub.currency != selectedCurrency))
      } else {
        //add subscription
        const newsubscription = {
            isActive: true,
            currency: selectedCurrency,
            percentageFall: percentageFall,
            exchangeRateFall: exchangeRateFall,
            notificationMethod: []
        }
    
        setSubscriptions([...subscriptions, newsubscription]);
      }
      

    

      console.log(subscriptions);

      console.log('percentageFall:', percentageFall);
      console.log('exchangeRateFall:', exchangeRateFall);
      console.log('Selected Notification Methods:', selectedMethods);
      setSelectedCurrency(null);

    };

    const openModal = (currency: string) => {
        const subscription = subscriptions.find(subscription => subscription.currency == currency);
        console.log(subscription)
        setPercentageFall(subscription ? subscription.percentageFall:'');
        setExchangeRate(subscription ? subscription.exchangeRateFall:'');
        if(subscription) {
            setNotificationMethods({sms: subscription.notificationMethod.includes('sms'),
                    mail: false,
                    push: false
            })
        } else {
            setNotificationMethods({
                sms: false,
                mail: false,
                push: false
            }
            );
        }
        setSelectedCurrency(currency);
    };

    const closeModal = () => {
        setSelectedCurrency(null);
    };

    return (
        <div className="grid grid-cols-1 gap-4 p-4 px-6 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
            {accounts.map((account, index) => {
                // Calculate the change
                const change = account.rate - account.previousRate;
                const percentageChange = (change / account.previousRate) * 100;

                return (
                    <div
                        key={index}
                        className="bg-white px-0 py-2  transition-shadow relative flex border-b-[1px]"
                        style={{width: '100%', height: '100%'}}
                    >
                        <div className="px-2 py-6">
                            <ScoreIndicator value={5}/>
                        </div>

                        <div className={"ml-4"}>
                            <div className="flex items-center justify-between mb-2">

                                <div className="text-2xl font-bold text-gray-700 flex gap-4">
                                    EUR/{account.currency}

                                    {/*<span className="bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-full text-xs">*/}
                                    {/*    Buy*/}
                                    {/*</span>*/}
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
                                <span className="text-xl font-bold text-black">{account.rate.toFixed(4)}</span>

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
                        </div>
                        <hr/>
                    </div>
                );
            })}

{selectedCurrency && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 shadow-lg relative max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">Subscribe for notifications</h2>
                        <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Percentage fall by
    </label>
    <input
      type="text"
      id="percentageFall"
      value={percentageFall}
      onChange={(e) => setPercentageFall(e.target.value)}
      placeholder="Enter the percentage fall when you would like to be notified."
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  {/* Second Input Field */}
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
      Exchange rate fallen to
    </label>
    <input
      type="text"
      id="exchangeRate"
      value={exchangeRateFall}
      onChange={(e) => setExchangeRate(e.target.value)}
      placeholder="Enter exchange rate when you would like to be notified."
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  {/* Notification Methods (Checkboxes) */}
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Notification Method
    </label>
    <div className="flex gap-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <span className="ml-2 text-gray-700">SMS</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <span className="ml-2 text-gray-700">Mail</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <span className="ml-2 text-gray-700">Push</span>
      </label>
    </div>
  </div>


                        <div className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-md px-6 py-3 rounded-full w-full cursor-pointer transition-transform transform hover:scale-105 border-2 border-gray-900 col-span-1"
                        onClick={() => handleSubmit()}>
                                {subscriptions.find(subscription => subscription.currency === selectedCurrency && subscription.isActive) ? "unsubscribe" : "subscribe"}
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
