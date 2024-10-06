import { NavLink } from "react-router-dom";
import compareImg from '../assets/compare.png'

const FeatureSection = () => {
    return (
        <section className="flex py-24 px-10 justify-center bg-slate-50">
            <div className="container">
                <div className="section-heading">
                <h2 className="section-title">Key <span className="text-[#3248F2]">features</span> that transform the experience</h2>
                </div>
                <div className="flex justify-between items-center mt-8 flex-col lg:flex-row ">
                    <div className="flex flex-col mt-10 p-8 md:items-center lg:items-start justify-start max-w-screen-md ">
                    <p className="section-subheading ">User-friendly Interface</p>
                    <p className="section-subheading mb-8 text-[#3248F2]">Easy Compare</p>
                    <p className="text-sm font-Aeonik font-normal text-gray-500 leading-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <NavLink to="/pms" className="relative group inline-flex items-center mt-4 px-8 py-3 overflow-hidden max-w-48 font-medium text-[#3248F2] border-2 border-[#3248F2] rounded-2xl hover:text-white group hover:bg-gray-50" path="/pms" >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#3248F2] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    </span>
                    <span className="relative text-lg font-Aeonik font-normal transition-all duration-300 group-hover:-translate-x-3">Compare now</span>
                    </NavLink>

                    </div>
                    <div className="flex justify-center items-center overflow-hidden">
                    <img src={compareImg} alt="Compare Feature Image" className="mt-10 h-auto lg:w-[1200px] border border-[#3248F2] rounded-2xl  " />
                    </div>
                </div>
                    
            </div>
        </section>
    )
};

export default FeatureSection;
