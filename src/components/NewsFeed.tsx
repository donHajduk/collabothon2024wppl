import { Article } from "@/model/article.type";
import { getCurrencyNews } from "@/service/newsFeed.service";
import React, { useState } from "react";



const NewsFeed: React.FC = () => {

    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const openModal = (article: Article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    const articles = getCurrencyNews("EUR");
    return (
        <>
        <div className="bg-white max-w-4xl overflow-x-auto m-5">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>

            {articles.map(element => (
                <div key={element.id} className="border-b border-gray-200 py-3 flex justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium" onClick={() => openModal(element)}>{element.title}</h3>
                    </div>

                </div>
            )
            )}

{selectedArticle && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 shadow-lg relative max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
                        <p className="text-gray-700 mt-4">{selectedArticle.content}</p>
                        <span className="block mt-2 italic text-sm">source: commerzbank.com</span>
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
        </>
    );
}

export default NewsFeed;
