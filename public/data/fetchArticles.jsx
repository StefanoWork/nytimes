import { useEffect, useRef, useState } from 'react';
import { lastArticles } from './api';

const useFetchArticles = (section) => {

const [articles, setArticles] = useState([]);
const fetchedSections = useRef(new Set());

    useEffect(() => {
        console.log("Component mounted with section:", section);

        const fetchArticles = async () => {
            if (fetchedSections.current.has(section)) return;
            try {
                const results = await lastArticles(section);
                setArticles(results);
                fetchedSections.current.add(section);
                console.log(`Fetched articles : ${section}`);
            } catch (error) {
                console.error("Failed to fetch articles: ", error);
            }
        };
        fetchArticles();
    }, [section]);

    return articles;
};

export default useFetchArticles;