import Image from 'next/image';

export default function Section({articles}) {
const topArticles = articles.slice(0, 4);

    return (
        <>
            <div className="sm:flex mt-8">
                <div className="sm:w-[66%] w-full mb-3 sm:mb-0">
                    {topArticles[0]?.multimedia != null && (<Image 
                        className="w-full object-fit"
                        src={topArticles[0]?.multimedia[0]?.url} 
                        alt={topArticles[0]?.multimedia[0]?.caption} 
                        height={200}
                        width={500}
                    />)}
                    <h2 className="font-bold text-xl sm:mt-9 mt-3 leading-tight sm:text-center dm">{topArticles[0]?.title}</h2>
                    <p className="text-sm mt-2 sm:text-center sm:px-10">{topArticles[0]?.abstract}</p>
                    <div className="block sm:hidden h-[1px] bg-gray-600 opacity-25 mt-2"></div>

                </div>

                <div className='bg-gray-400 opacity-35 w-[1px] mx-9'></div>

                <div className="sm:w-[33%]">
                    {topArticles.slice(1 , 4).map((article, index) => (
                        <div className='mb-6' key={index}>
                            <div className='sm:flex'>
                                <h2 className="hidden sm:block font-bold text-xl mt-2 sm:w-[75%] dm">{article.title}</h2>
                                {article?.multimedia != null && (
                                    <>
                                        <Image 
                                            className="hidden sm:block sm:ml-4 object-contain w-[25%]" 
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
                            <p className="text-sm sm:mt-4 mt-2">{article.abstract}</p>
                            <div className="block sm:hidden h-[1px] bg-gray-600 opacity-25 mt-2"></div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}