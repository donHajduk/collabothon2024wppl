import { getCurrencyNews } from "@/service/newsFeed.service";
import React from "react";


const NewsFeed: React.FC = () => {
    const articles = getCurrencyNews("EUR");
    return (
        <>
        <div className="bg-white w-full max-w-4xl overflow-x-auto m-5">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>

            {articles.map(element => (
                <div key={1} className="border-b border-gray-200 py-3 flex justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium">{element}</h3>
                    </div>

                </div>
            )
            )}
        </div>
        </>
    );
}

export default NewsFeed;