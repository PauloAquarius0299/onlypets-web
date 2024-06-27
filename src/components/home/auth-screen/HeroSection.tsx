import React from 'react';
import Image from "next/image";
import AuthButtons from './AuthButtons';

const HeroSection = () => {
  return (
    <div className='flex h-screen w-full'>
      <div className='flex-1 flex overflow-hidden bg-[#28f000ec] relative justify-center items-center z-10 bg-noise'>
        <img 
          src='pets-logo.svg'
          alt='OnlyPets logo'
          className='absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2] pointer-events-none select-none z-0'
        />
        <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold z-10'>
          <Image 
            src={'/onlypets-logo.png'}
            alt='OnlyPets Logo'
            width={769}
            height={182}
            className='mt-20 w-[420px] pointer-events-none select-none'
          />
          <p className='text-2xl md:text-3xl text-balance relative'>
            Hey! Isso <span className='bg-stone-800 px-2 font-bold text-white'>NÃO</span> é o que você está pensando.
          </p>
          <p className='text-2xl md:text-3xl md-32 leading-snug text-balance relative'>
            Feito para <span className='bg-sky-500 font-bold px-2 text-white'>PETS</span> Não para
            <span className='bg-red-500 px-2 font-bold'>GENTE</span>
          </p>
          <AuthButtons />
        </div>
      </div>
      <div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
        <Image 
          alt='Pets'
          src={'/hero.jpg'}
          fill 
          className='object-cover opacity-90 pointer-events-none select-none h-full'
        />
      </div>
    </div>
  );
}

export default HeroSection;
