import React from 'react'
import HeroSection from './HeroSection'
import { ModeToggle } from '@/components/ModeToggle'
import UnderlinedText from '@/components/decorators/UnderlinedText'
import TodayHighligth from './TodayHighligth'
import RotatedText from '@/components/decorators/RotatedText'
import MasonaryGrid from './MasonaryGrid'
import Features from './Features'
import Testimonials from './Testimonials'
import PricingPage from '@/components/Pricing'
import Team from './Team'

const AuthScreen = () => {
  return (
    <div className='flex flex-col'>
        <HeroSection />

        <div className='mb-20 mt-12'>
          <div className='max-w-6xl mx-auto px-4'>
            <p className='text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center'>
              <UnderlinedText className=' underline-offset-8 md:underline-offset-[12px] decoration-wavy'>
                Destaques
              </UnderlinedText> de hoje
                <span className='text-2xl md:text-4xl ml-1'> 👇</span>
            </p>

            <div className='flex flex-col gap-10 mt-10'>
              <TodayHighligth />

              <div className='mt-24'>
                <p className='text-2xl md:text-5xl text-center tracking-tighter font-bold'>
                  Conheça a <RotatedText>estrela</RotatedText>  da sua casa
                </p>
                <MasonaryGrid />
              </div>

              <Features />
              <Testimonials />
              <PricingPage />
              <Team />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AuthScreen