import axios from 'axios';
const API_KEY = process.env.REACT_APP_NYT_API_KEY;


export const lastArticles = async (section) => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=DAqFg7DdVJZv96TFbCAqU5dG862i2LA5`;
    try {
        const response = await axios.get(url);
        const sortedArticles = response.data.results.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));       
        return sortedArticles;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
