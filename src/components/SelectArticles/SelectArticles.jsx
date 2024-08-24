import { IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";


import { useState, useContext, use } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function SelectArticles() {

    const {activeButton, setActiveButton} = useContext(SearchContext);
    const {searchValue, setSearchValue} = useContext(SearchContext);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleButtonClear = () => {
        setSearchValue('');
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return(
        <div>
                <div className="h-[1px] bg-black mt-12"></div>
                <div className="flex sm:pl-6 sm:-mt-2">
                    <button 
                        className={`mr-3 sm:text-xl text-sm font-bold text-black hover:text-black ${activeButton === 'latest' ? 'sm:border-t sm:border-l sm:border-r z-10 sm:px-3 sm:py-3  bg-white' : 'text-gray-400'}`}
                        onClick={() => handleButtonClick('latest')}
                    >
                        Latest
                    </button>
                    <button 
                        className={`mr-3 sm:text-xl text-sm font-bold flex group hover:text-black items-center ${activeButton === 'search' ? 'sm:border-t sm:border-l sm:border-r z-10 sm:px-3 sm:py-3  bg-white' : 'text-gray-400'}`}
                        onClick={() => handleButtonClick('search')}
                    >
                        
                        <IoMdSearch className="mr-1 group-hover:fill-black"/>
                        {activeButton != "search" && 
                            'Search'
                        }
                        {activeButton === 'search' && (
                            <div>
                                <input
                                    placeholder="Search"
                                    onChange={handleInputChange}
                                    value={searchValue}
                                    className="sm:text-xl text-sm font-bold pl-2 placeholder-placeholder-gray"
                                    >                                                          
                                </input>
                                <button
                                    onClick={handleButtonClear}
                                >
                                    <MdCancel className="fill-black"/>
                                </button>  
                            </div>
                        )}  
                    </button>
                </div>
                
                <div className="h-[1px] bg-gray-300 dark:bg-black"></div>
        </div>
    )
}