"use client";
import { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import BlockSection from '../components/BlockSection/BlockSection';
import SectionSmall from '../components/SectionSmall/SectionSmall';
import CarouselSmall from '../components/CarouselSmall/Carousel';
import SmallLine from '../components/SmallLine/SmallLine';
import AllNews from '../components/AllNews/AllNews';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <>
    <Hero />
    <Navbar />

    <div className='hidden md:block md:mt-4 md:mb-4'>
      <div className='h-[1px] w-auto bg-black mb-[2px] '></div>
      <div className='h-[1px] w-auto bg-black '></div>
    </div>
    
    <div>
      <div className='md:flex block'>
        <div className='md:w-[70%] w-full'>
          <BlockSection section="world" />
          <BlockSection section="business" />
          <BlockSection section="us" />
        </div>
        <div className='w-[1px] bg-black opacity-35 mr-6 ml-6'></div>
        <div className='md:w-[30%] w-full'>
          <div className="h-[1px] bg-gray-600 dark:bg-black mb-3"></div>

          {isMobile ? (
            <>
            <BlockSection section="realestate" />
            <CarouselSmall section="science"/>
            <BlockSection section="climate" />
            </>
          ) : (
            <>
            <SectionSmall section="realestate" />
            <CarouselSmall section="science"/>
            <SectionSmall section="climate" />
            </>
          )}
          
        </div>
      </div>
      <div className='w-full'>
        <SmallLine section="business"/>
      </div>
    </div>

    <div className='mt-4 mb-4'>
      <div className='h-[1px] w-auto bg-black mb-[2px]'></div>
      <div className='h-[1px] w-auto bg-black'></div>
    </div>

    <div>
      <h3 className="hidden sm:block font-bold text-sm">NEWS</h3>
    </div>

    <div className='hidden sm:grid grid-cols-5 gap-4 mt-4'>
      <AllNews section="business" />
      <AllNews section="arts" />
      <AllNews section="travel" />
      <AllNews section="world" />
      <AllNews section="technology" />
      <AllNews section="science" />
      <AllNews section="education" />
      <AllNews section="sports" />
      <AllNews section="style" />
    </div>

    <Footer />

   </>
  );
}
