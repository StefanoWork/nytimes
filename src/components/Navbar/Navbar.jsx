"use client";

import nameSection from '../../../public/data/data';
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredSection, setHoveredSection] = useState([]);
    const timeoutIdRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 130) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const handleMouseEnter = (sectionName) => 
    {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
        setIsHovered(true);
        }, 250);
        const section = nameSection.find((item) => item.displayName === sectionName);
        setHoveredSection(section); 
    };

    const handleMouseLeave = () => 
    {
        timeoutIdRef.current = setTimeout(() => {
            setIsHovered(false); 
            setHoveredSection(null);
        }, 250);
    };

    return (
    <>
        <div className={`hidden ${isSticky ? 'lg:block lg:fixed lg:top-0 lg:z-50 bg-white lg:py-3 dark:text-black lg:m-0 lg:shadow-lg lg:w-screen lg:-mx-[9%]' : 'lg:block lg:relative lg:mt-6'}`}>
            <div>
                <ul className='flex flex-row justify-center items-center space-x-4'>
                    {nameSection.map((item, index) => (
                        <li 
                            key={index} 
                            className='flex items-center text-sm group'
                            onMouseEnter={() => handleMouseEnter(item.displayName)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link className='cursor-pointer' href={`/section/${item.section}`}>
                                {item.displayName}
                                <div className='bg-black h-[2px] opacity-0 group-hover:opacity-100'></div>                               
                            </Link>
                            <IoIosArrowDown color='gray' className='ml-1'/>  
                            {index === 5 && (
                                <div className='bg-black opacity-20 w-[1px] h-4 ml-3' ></div>
                             )}                          
                        </li>
                    ))}
                </ul>
            </div>
            {isHovered  && (                       
                <div 
                    className='bg-white h-60 mt-2 shadow-lg w-screen -mx-[9%] absolute z-10'
                    onMouseEnter={() => {
                        if (timeoutIdRef.current) 
                        {
                            clearTimeout(timeoutIdRef.current);
                        }
                        setIsHovered(true);
                    }}
                    onMouseLeave={handleMouseLeave}>
                    <div className='h-[1px] w-auto bg-gray-200 mx-[9%] mb-4'></div>
                    <div className='mx-[15%] flex'>
                      {hoveredSection.title && (
                            <div className='mr-20 w-64'>
                                <div className='text-lg font-bold mb-6'>{hoveredSection.title}</div>
                                <div className='text-sm text-gray-600'>{hoveredSection.subtitle}</div>
                            </div>
                        )}
                        <div className='w-[30%]'>
                            <div className='text-sm text-gray-600 '>{hoveredSection.titleSub}</div>
                            <ul className='grid grid-cols-2 md:grid-cols-2'>
                                {hoveredSection.subsection.map((item, index) => (
                                    <a 
                                        key={index} 
                                        href={`https://www.nytimes.com/section/${item.url}`} 
                                        className='text-[12px] text-black mt-3 flex hover:text-gray-600'
                                    >
                                    {item.name}                          
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    </>
    );
}