import Image from 'next/image';
import Link from 'next/link';
import {format} from 'date-fns';
import {useContext} from 'react';
import {SearchContext} from '../../contexts/SearchContext';


export default function ListArticles({articles}) {
    const {searchValue, setSearchValue} = useContext(SearchContext);
    const {activeButton, setActiveButton} = useContext(SearchContext);

    const filteredArticles = [];
    if(activeButton === 'search') {
        articles.filter((article) => {
            if(article.title.toLowerCase().includes(searchValue.toLowerCase())) {
                filteredArticles.push(article);
            }
        })
    }

    return (
        <div className="sm:mt-6 mt-2">
            {activeButton === 'search' && (
                <>
                    <p className='mb-3'>
                        {filteredArticles.length} results {searchValue !== "" && (
                            <>
                            for <span className='font-bold'>{searchValue}</span>
                            </>
                    )}
                    </p>
                    <div className='h-[1px] bg-gray-300 mb-3'></div>

                    {filteredArticles.map((article, index) => {
                    const formattedDate = format(new Date(article.published_date), 'MMM, dd, yyyy');
                    const noBy = article.byline.replace(/^by\s+/i, '');

                        return (
                            <Link href={article.url} key={index}>
                                <div className='sm:w-[75%]' >
                                    <div className="sm:mb-6 mb-2 flex">
                                        <p className='hidden sm:flex w-[18%] text-sm text-gray-500 dark:text-white'>{formattedDate}</p>                       

                                        <div className='sm:ml-2 sm:w-[60%] w-[50%]'>
                                            <p className='hidden sm:block text-sm'>{noBy}</p>
                                            <h2 className="sm:font-bold sm:text-xl mt-1 hover:underline">{article.title}</h2>
                                            <p className="hidden sm:block text-sm mt-4">{article.abstract}</p>
                                            <p className='hidden sm:block text-gray-500 dark:text-white text-sm mt-2'>{article.byline}</p>                      
                                                
                                        </div>

                                        {article.multimedia != null && (
                                            <Image 
                                            className="ml-4 object-contain w-[50%] sm:w-full" 
                                            width={200} 
                                            height={250}
                                            src={article?.multimedia[1]?.url} 
                                            alt={article?.multimedia[0]?.caption}
                                            />
                                        )}                               
                                    </div>
                                    <p className="block sm:hidden text-sm">{article.abstract}</p>
                                    <p className='block sm:hidden text-[10px] text-gray-500 dark:text-white'>{formattedDate}</p>                       


                                    <div className='h-[1px] bg-gray-500 dark:bg-black opacity-75 my-4'></div>
                                </div>
                            </Link>
                        )
                    })}
                </>
            )}
            {activeButton === 'latest' && 
                (articles.map((article, index) => {
                    const formattedDate = format(new Date(article.published_date), 'MMM, dd, yyyy');
                    const noBy = article.byline.replace(/^by\s+/i, '');

                    return (
                        <Link href={article.url}>
                            <div className='w-[75%]' >
                            <div className=" mb-6 flex" key={index}>
                                <div className='w-[12%]'>                        
                                <p className='text-sm text-gray-500 dark:text-white'>{formattedDate}</p>
                                </div>

                                <div className='ml-2 w-[60%]'>
                                    <p className='text-sm'>{noBy}</p>
                                    <h2 className="font-bold text-xl mt-1 hover:underline">{article.title}</h2>
                                    <p className="text-sm mt-4">{article.abstract}</p>
                                    <p className='text-gray-500 dark:text-white text-sm mt-2'>{article.byline}</p>                      
                                        
                                </div>

                                    {article.multimedia != null && (
                                        <Image 
                                            className="ml-4 object-contain" 
                                            width={200} 
                                            height={250}
                                            src={article?.multimedia[1]?.url} 
                                            alt={article?.multimedia[0]?.caption}
                                        />
                                    )}                               
                            </div>
                            <div className='h-[1px] bg-gray-500 opacity-75 my-4'></div>

                            </div>
                        </Link>
                    )
                }))
            }
        </div>
    )
}