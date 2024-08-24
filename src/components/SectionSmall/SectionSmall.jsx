"use client";

import { useEffect, useState } from "react"
import useFetchArticles from "../../../public/data/fetchArticles";
import Image from 'next/image'

export default function BlockSection({section}) {

    const [index, setIndex] = useState(0);

    const articles = useFetchArticles(section);

     useEffect(() => {
        if(articles.length > 0) {
            const tryIndex = () => {
                while (articles[index].multimedia === null || undefined) {
                    setIndex(index + 1);
                }
            }
            tryIndex();
        }
    }, [articles, index]);


    return (
        <>
            <div>
                {(articles[index]?.multimedia != null && articles[index]?.multimedia != undefined) && (
                    <Image 
                        src={articles[index]?.multimedia[1]?.url} 
                        alt={articles[index]?.multimedia[0]?.caption} 
                        width={600} 
                        height={400} 
                    />
                )}
                <p className="text-[10px] text-gray-500 dark:text-white text-right">{articles[index]?.multimedia[0].copyright}</p>
                <h2 className="text-xl mt-3 dm">{articles[index]?.title}</h2>
                <p className="text-sm mt-3 text-gray-700 dark:text-white">{articles[index]?.abstract}</p>
            </div>
            <div className="h-[1px] bg-black opacity-35 my-5"></div>
        </>
    )
}