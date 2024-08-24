"use client";

import useFetchArticles from "../../../public/data/fetchArticles";
import Image from 'next/image';

export default function SmallLine({section}) {
   
    const articles = useFetchArticles(section);

    return (
    <>
        <div className="h-[1px] bg-black opacity-35 my-5"></div>
        <div className="mt-4 flex overflow-x-auto sm:flex-nowrap scroll-snap-type-x-mandatory">   
            {articles.slice(0, 5).map((article, index) => (
                (articles[index]?.multimedia != null || articles[index]?.multimedia != undefined) && (<div key={index} className="w-1/5 flex flex-row scroll-snap-align-start sm:flex min-w-mobile-card flex-mobile-card sm:min-w-0 sm:flex-1">
                    <a className="mr-3" href={article?.url}>
                         <Image
                            src={article?.multimedia[1]?.url}
                            alt={article?.multimedia[0]?.caption}
                            width={250}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }}
                            className="object-cover w-[250px] h-[100px]"
                        />  
                        <p className="hidden sm:block text-[9px] h-3 text-right text-gray-500 dark:text-white">{article?.multimedia[0]?.copyright}</p>                           
                        <div className="mt-4">
                            <h2 className="text-sm font-bold mt-3 dm">{article?.title}</h2>
                        </div>
                    </a>
                    {index != 4 && <div className="w-[1px] bg-gray-400 mr-3"></div>}                           
                </div>)
            ))}                                                                                                                                                                              
        </div>
        <div className="h-[1px] bg-black opacity-35 my-5"></div>
    </>
    )
}