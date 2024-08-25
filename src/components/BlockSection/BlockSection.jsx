"use client";

import { useEffect, useState } from "react"
import useFetchArticles from "../../../public/data/fetchArticles";
import Image from 'next/image'
import { useSelector } from 'react-redux';


export default function BlockSection({section}) {
    const darkMode = useSelector((state) => state.darkMode);
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const articles = useFetchArticles(section);

    useEffect(() => {
        if(articles.length > 0) {
            const tryIndex = () => {
                let newIndex = index;
                while (articles[index].multimedia === null || articles[newIndex]?.multimedia === undefined) {
                    newIndex++;
                }
                if (newIndex !== index) {
                    setIndex(newIndex);
                }
            }
            tryIndex();
        }
    }, [articles, index]);

    //Dimensioni schermo
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="sm:h-[1px] sm: bg-gray-600 dark:bg-black sm:mb-3"></div>
            <div className="sm:mb-6 mt-3">
                {(section === "world" || isMobile) && 
                <a href={articles[index]?.url}>
                    <h2 className="font-bold text-xl sm:mb-7 mb-2 dm">{articles[index]?.title}</h2>
                </a>}
                <div className="sm:flex block">
                    <div className="sm:w-[30%] w-full">
                        <a href={articles[index]?.url}>
                            <div className="hidden sm:block sm:mb-4">
                                {section === "world" ? <h3 className={`font-bold text-base mb-4 dm`}>{articles[index]?.title}</h3> : <h2 className="font-bold text-base mb-4 dm">{articles[index]?.title}</h2>}
                                {section === "world" ? <h4 className="text-sm text-gray-700  dark:text-white">{articles[index]?.abstract}</h4> : <h3 className="text-sm text-gray-700  dark:text-white">{articles[index]?.abstract}</h3>}
                            </div>
                            <div className="sm:hidden block">
                                <h3 className="text-sm text-gray-700">{articles[index]?.abstract}</h3>
                            </div>
                        </a>
                       
                        {section === "world" && (
                            <a className="hidden sm:block"  href={articles[index+1]?.url}>
                               <div>
                                    <div className="bg-slate-700 dark:bg-black h-[1px] opacity-20 mb-4"></div>
                                    <h2 className="font-bold text-base mb-4 dm">{articles[index+1]?.title}</h2>
                                    <h3 className="text-sm dark:text-white text-gray-700">{articles[index+1]?.abstract}</h3>
                                </div>  
                            </a>
                        )}
                     
                    </div>
                    {(articles[index]?.multimedia != null && articles[index]?.multimedia != undefined) && (<div className="w-full sm:w-[70%] mt-3 sm:mt-0 sm:ml-8 overflow-hidden"  >
                        <a href={articles[index]?.url}>
                            <Image 
                                className="object-cover max-w-full max-h-full" 
                                src={articles[index]?.multimedia[1]?.url} 
                                alt={articles[index]?.multimedia[0]?.caption} 
                                width={600} 
                                height={400}  
                                style={{ width: 'auto', height: 'auto' }}

                            />
                        </a>
                        <p className={`text-[10px] text-gray-500 text-right dark:text-white`}>{articles[index]?.multimedia[0]?.copyright}</p>
                    </div>)}
                </div>
            </div>
            <div className="h-[1px] sm:bg-black mt-2 mb-3 sm:mt-0 sm:mb-0 sm:h-0"></div>

        </>
        
    )
}