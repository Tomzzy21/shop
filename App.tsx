import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Services from './components/Services';
import IncomeCard from './components/IncomeCard';
import GrowthCard from './components/GrowthCard';
import RevenueCard from './components/RevenueCard';
import BalanceCard from './components/BalanceCard';
import ManageProjectsCard from './components/ManageProjectsCard';
import ManageTaskCard from './components/ManageTaskCard';
import RevenueGrowthCard from './components/RevenueGrowthCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { DoodleScribbleIcon, DoodlePlusSignsIcon, DoodleCircleArrowIcon } from './components/Icons';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      {/* Top section with grey background */}
      <div className="bg-[#EFEFF0] bg-[radial-gradient(#dde2e7_1px,transparent_1px)] [background-size:24px_24px] pt-20">
          <main className="relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative z-10">
                <Hero />
                <TrustedBy />
              </div>
            </div>

              {/* Floating Cards - positioned absolutely relative to the main container */}
              <div className="hidden lg:block">
                {/* Existing Cards */}
                <div className="absolute top-10 left-0 transform -rotate-6 w-72">
                    <IncomeCard />
                </div>
                <div className="absolute top-80 left-12 transform rotate-3 w-56">
                    <GrowthCard />
                </div>
                <div className="absolute top-16 right-0 transform rotate-6 w-60">
                    <RevenueCard />
                </div>
                <div className="absolute top-64 right-4 transform -rotate-3 w-72">
                    <BalanceCard />
                </div>
                
                {/* New Cards from image */}
                <div className="absolute -top-2 right-4 transform -rotate-3 z-20">
                  <ManageProjectsCard />
                </div>
                <div className="absolute top-[30rem] left-10 z-20">
                  <ManageTaskCard />
                </div>
                <div className="absolute top-[26rem] right-20 transform rotate-2 z-20">
                    <RevenueGrowthCard />
                </div>


                {/* Decorative SVGs */}
                <div className="absolute top-24 left-10 -z-10">
                  <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15C13.4354 -3.33333 30.5806 33.3333 41.7419 15C52.9032 -3.33333 70.0484 33.3333 81.2097 15C92.371 -3.33333 109.516 33.3333 120.677 15C131.839 -3.33333 148.984 33.3333 160.145 15C171.306 -3.33333 188.452 33.3333 199.613 15" stroke="#A8B0B9" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="absolute top-80 left-[26rem] -z-10">
                  <svg width="121" height="95" viewBox="0 0 121 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 81.5C1.5 48.5 35.1667 15.1667 55 2C74.8333 -11.1667 101.5 13.5 110.5 24" stroke="#A8B0B9" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M119.5 20.5L110.5 24L114 32.5" stroke="#A8B0B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                 <div className="absolute bottom-10 right-20 -z-10 opacity-70">
                    <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="175" cy="175" r="174.5" stroke="#E0E6EC" />
                    </svg>
                </div>
                <div className="absolute top-10 right-1/2 translate-x-[20rem] -z-10 opacity-50">
                    <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="225" cy="225" r="224.5" stroke="#F5D6B1" />
                    </svg>
                </div>

                {/* Doodles */}
                <div className="absolute top-[28rem] left-[24rem] -z-10 text-gray-400/80 transform -rotate-12">
                    <DoodleScribbleIcon className="w-40 h-20" />
                </div>
                <div className="absolute top-40 right-80 -z-10 text-yellow-500/60 transform rotate-12">
                    <DoodlePlusSignsIcon className="w-20 h-20" />
                </div>
                <div className="absolute top-[40rem] left-80 -z-10 text-blue-400/60 transform rotate-[25deg]">
                    <DoodleCircleArrowIcon className="w-28 h-28" />
                </div>
              </div>
            </main>
      </div>
      {/* Rest of the page on a white background */}
      <section id="about"><AboutUs /></section>
      <section id="problem-solution"><ProblemSolution /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><Features /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="faq"><FAQ /></section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;