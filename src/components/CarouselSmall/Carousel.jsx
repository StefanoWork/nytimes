"use client";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import useFetchArticles from "../../../public/data/fetchArticles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

export default function BlockSection({ section }) {
    const darkmode = useSelector((state) => state.theme.darkmode);
    const articles = useFetchArticles(section);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % articles.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + articles.length) % articles.length);
    };

    const groupedArticles = [];
    for (let i = 0; i < articles.length; i += 2) {
        groupedArticles.push(articles.slice(i, i + 2));
    }

    return (
        <>           
            <div className="mt-4">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {groupedArticles.map((group, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === Math.floor(currentIndex / 2) ? 'active' : ''}`}
                        >
                            <div className="flex">
                                {group.map((article, subIndex) => (
                                    <div key={subIndex} className="w-1/2 flex">
                                        {(article?.multimedia != null && article?.multimedia != undefined) && (
                                            <div>
                                                <Image
                                                    src={article?.multimedia[1]?.url}
                                                    alt={article?.multimedia[0]?.caption}
                                                    width={350}
                                                    height={100}
                                                    className="w-full object-cover"
                                                />
                                                <div className="w-full">
                                                    <h2 className="text-sm font-bold mt-3 dm">{article?.title}</h2>
                                                </div>

                                            </div>
                                            
                                        )}
                                        <div className="w-[1px] bg-gray-400 mx-2"/>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    </div>                                                          
                </div> 
                <div className="flex flex-row justify-end mt-6">
                    <button onClick={handlePrev} className="p-1 rounded-3xl border border-gray-400 mr-4">
                        {darkmode ? <IoIosArrowBack fill="white"/> : <IoIosArrowBack fill="black"/>}
                    </button>
                    <button onClick={handleNext} className="p-1 rounded-3xl border border-gray-400">
                        {darkmode ? <IoIosArrowForward fill="white"/> : <IoIosArrowForward fill="black"/>}
                    </button>
                </div>               
            </div> 
            <div className="h-[1px] bg-black opacity-35 my-5"></div>
        </>
    );
}