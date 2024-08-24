"use client";

import { useEffect, useState, useRef } from "react"
import useFetchArticles from "../../../public/data/fetchArticles";

import Image from 'next/image'

export default function AllNews({section}) {

    const articles = useFetchArticles(section);

    const capitalize = (str) => {
        return str ? str.replace(/\b\w/g, char => char.toUpperCase()) : "";
    };

    return (
    <>
        <div>  
            <div className="font-bold mb-2 text-sm">{capitalize(section)}</div> 
            {articles.slice(0, 3).map((article, index) => (
                <div key={index}>
                    <a href={article?.url}>
                        {(index === 0 && article?.multimedia != null) && (
                            <Image
                            src={article?.multimedia[1]?.url}
                            alt={article?.multimedia[0]?.caption}
                            width={250}
                            height={500}
                            className="object-cover w-[250px] h-[150px]"
                            /> 
                        )} 
                        <div>
                            <h2 className="text-sm mt-2 mb">{article?.title}</h2>
                        </div>
                    </a>
                </div>
            ))}                                                                                                                                                                              
        </div>
    </>
    )
}