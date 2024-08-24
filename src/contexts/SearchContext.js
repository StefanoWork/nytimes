import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const [activeButton, setActiveButton] = useState("latest");


    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, activeButton, setActiveButton }}>
            {children}
        </SearchContext.Provider>
    )
}