
import ArrowIcon from '@heroicons/react/24/outline/ArrowRightIcon'
import heroImage from '../assets/heroImage1.png'
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
    <section className='pt-10 pb-20 md:pt-8 md:pb-10 md:flex md:justify-center overflow-x-clip lg:my-10 md:my-4 '>
      <div className="container p-5 ">
      <div className='md:flex md:items-center md:justify-center'>
      <div className='md:w-[478px] lg:w-[778px]'>
        <div className='text-sm lg:text-lg font-Aeonik font-normal inline-flex border border-indigo-700/30 rounded-2xl px-4 py-2 tracking-tight items-center justify-center gap-1'><label className='text-indigo-700'>#1</label> Investment Approach</div>
        <h1 className='text-5xl md:text-7xl font-Aeonik font-medium tracking-tighter bg-gradient-to-b from-indigo-700 to-[#3248F2] text-transparent bg-clip-text mt-6'>Elevate Your Investments, Welcome To Alphanex</h1>
        <p className='text-base lg:text-xl font-Aeonik font-normal text-slate-500 tracking-tight mt-6'>Unleash Your Financial Horizons through precise Guidance and connect you with right people</p>
      <div className='flex gap-1 items-center mt-6'>
        
      <NavLink to="/pms" className="relative group inline-flex items-center px-10 py-3 overflow-hidden max-w-60 font-medium text-[#3248F2] border-2 border-[#3248F2] rounded-2xl hover:text-white group hover:bg-gray-50" path="/pms" >
      <span className="absolute left-0 block w-full h-0 transition-all bg-[#3248F2] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
      </span>
      <span className="relative text-lg font-Aeonik font-normal transition-all duration-300 group-hover:-translate-x-3">Get Started</span>
      </NavLink>

      <a href="" className="group pl-6 flex items-center gap-2 text-[15px] font-Aeonik font-medium text-black transition-all duration-500 ">
      Learn More
      <svg className="transition-all duration-500  group-hover:translate-x-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </a>
      </div>
      </div>
      <div className='mt-16 md:mt-0 md:h-full md:flex-1 md:items-center lg:m-6 lg:pl-4'>
        <img src={heroImage} alt='Hero Image' className=''></img>
      </div>
      </div>
      </div>
    </section>
    )
};

export default Hero