import Image from 'next/image';
import {format} from 'date-fns';


export default function Section({articles}) {
const topArticles = articles.slice(0, 4);

    return (
        <>
            <div className="sm:flex mt-8">
                <div className="sm:w-[66%] w-full mb-3 sm:mb-0">
                    <a href={topArticles[0]?.url}>
                        {topArticles[0]?.multimedia != null && (
                        <Image 
                            className="w-full object-fit"
                            src={topArticles[0]?.multimedia[0]?.url} 
                            alt={topArticles[0]?.multimedia[0]?.caption} 
                            height={200}
                            width={500}
                        />)}
                        <h2 className="font-bold text-xl sm:mt-9 mt-3 leading-tight sm:text-center dm">{topArticles[0]?.title}</h2>
                        <p className="text-sm mt-2 sm:text-center sm:px-10">{topArticles[0]?.abstract}</p>
                    </a>
                    <div className="block sm:hidden h-[1px] bg-gray-600 opacity-25 mt-2"></div>

                </div>

                <div className='bg-gray-400 opacity-35 w-[1px] lg:mx-9 mx-3'></div>

                <div className="sm:w-[33%]">
                    {topArticles.slice(1 , 4).map((article, index) => {

                        const formattedDate = format(new Date(article.published_date), 'MMM, dd, yyyy');
                        return (
                            <div className='mb-6' key={index}>
                                <a href={article.url}>
                                    <div className='sm:flex'>
                                        
                                        <h2 className="hidden sm:block font-bold text-xl lg:mt-2 sm:w-[75%] dm">{article.title}</h2>
                                        {article?.multimedia != null && (
                                            <>
                                                <Image 
                                                    className="hidden sm:block sm:ml-4 object-contain lg:w-[25%] w-[40%] self-start" 
                                                    width={150} 
                                                    height={150}
                                                    src={article?.multimedia[2]?.url} 
                                                    alt={article?.multimedia[0]?.caption} 
                                                />
                                                <Image 
                                                    className="block sm:hidden object-contain w-full" 
                                                    width={150} 
                                                    height={150}
                                                    src={article?.multimedia[1]?.url} 
                                                    alt={article?.multimedia[0]?.caption} 
                                                />
                                            </>
                                        )}
                                        <h2 className="block sm:hidden font-bold text-xl mt-2 sm:w-[75%] dm">{article.title}</h2>                                                                  
                                    </div>
                                    <p className="hidden lg:block text-sm sm:mt-4 mt-2">{article.abstract}</p>
                                    <p className='block lg:hidden text-[10px] mt-2 text-gray-300 dark:text-white'>{formattedDate}</p>
                                    <div className=" h-[1px] bg-gray-600 opacity-25 mt-2"></div>
                                </a> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}