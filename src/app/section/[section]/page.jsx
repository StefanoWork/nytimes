"use client";

import { useState } from "react";
import { SearchProvider } from "../../../contexts/SearchContext";
import Navbar from "../../../components/NavbarSection/Navbar"
import SectionBig from "../../../components/SectionBig/Section"
import Footer from "../../../components/Footer/Footer";
import ListArticles from "../../../components/ListArticles/ListArticles"
import SelectArticles from "../../../components/SelectArticles/SelectArticles"

import {dataSingleSection} from "../../../../public/data/data-section"
import useFetchArticles from "../../../../public/data/fetchArticles"



export default function Section({params}) {
    const section = params.section;
    const sectionData = dataSingleSection.find((item) => item.section === section);
    console.log("params", sectionData);

    const articles = useFetchArticles(section);

    return (
        <SearchProvider>
            <Navbar section={sectionData.Name}/>
            <div className="hidden sm:block h-[1px] bg-gray-600 dark:bg-black opacity-25 mt-2 -mx-[12%]"></div>

            <h1 className="font-bold text-left text-4xl mt-12">{sectionData.Name}</h1>
            <div className="h-[1px] bg-black mt-2"></div>
            <SectionBig articles={articles}/>

            <SelectArticles/>
            <ListArticles articles={articles}/>

            <Footer/>

        </SearchProvider>
    )
}