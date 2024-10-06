
// import { NavLink } from 'react-router-dom';
// import { WiSmallCraftAdvisory } from "react-icons/wi";
import CardTemplate from './CardTemplate';
import { IoBriefcase } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const Servicecards = () => {
    return (
        <section className="flex py-24 px-10 justify-center">
            <div className="container">
                <div className="section-heading">
                <h2 className="section-title">We offer <span className='text-[#3248F2]'>best guidance</span> for your needs</h2>
                <p className="section-description mt-3">Discover your financial potential with Alphanex, Your Gateway to Smart Investing. Here’s what we offer</p>
                </div>

                {/* <div className="flex flex-col gap-10 items-center mt-10 p-10 lg:flex-row lg:justify-center">
                
                <NavLink to="#" className="p-6 bg-[#F3F6FF] md:max-w-[480px] rounded-3xl drop-shadow-md shadow-[0_0px_2px_#F3F6FF] transition-all duration-700 hover:scale-105">
                <div>
                    <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-Aeonik font-normal text-black ">PMS Investment</h3>
                    < WiSmallCraftAdvisory className="h-24 w-24 text-[#3248F2]" />
                    </div>
                    <div className="font-Aeonik text-lg text-slate-500">
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="flex font-Aeonik text-lg text-slate-500 justify-end">
                        <p className='pt-3 hover:underline'>Learn more</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to="#" className="p-7 bg-[#F3F6FF] md:max-w-[480px] rounded-3xl drop-shadow-md shadow-[0_0px_2px_#F3F6FF] transition-all duration-700 hover:drop-shadow-lg hover:scale-105">
                <div>
                    <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-Aeonik font-normal text-black ">PMS Investment</h3>
                    < WiSmallCraftAdvisory className="h-24 w-24 text-[#3248F2]" />
                    </div>
                    <div className="font-Aeonik text-lg text-slate-500">
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="flex font-Aeonik text-lg text-slate-500 justify-end">
                        <p className='pt-3 hover:underline'>Learn more</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to="#" className="p-7 bg-[#F3F6FF] md:max-w-[480px] rounded-3xl drop-shadow-md shadow-[0_0px_2px_#F3F6FF] transition-all duration-700 hover:bg-[#F3F6FF] hover:drop-shadow-lg hover:scale-105">
                <div>
                    <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-Aeonik font-normal text-black ">PMS Investment</h3>
                    < WiSmallCraftAdvisory className="h-24 w-24 text-[#3248F2]" />
                    </div>
                    <div className="font-Aeonik text-lg text-slate-500">
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="flex font-Aeonik text-lg text-slate-500 justify-end">
                    <p className="text-lg pt-3 group relative w-max">
                    <span>Learn more</span>
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#3248F2] group-hover:w-full"></span>
                    </p>
                    </div>
                </div>
                </NavLink>

            </div> */}
            
            <div className="flex flex-col gap-10 items-center mt-10 p-8 md:px-40 lg:p-8 lg:flex-row lg:justify-center">
            <CardTemplate title="Advisory Services" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." path="" svg={<RiCustomerService2Fill size="26" color='#3248F2' />}/>
            <CardTemplate title="PMS Investment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." path="/pms" svg={<IoBriefcase size="26" color='#3248F2' />}/>
            <CardTemplate title="AIF Investment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." path="/aif" svg={<IoBriefcase size="26" color='#3248F2' />}/>
            </div>
            </div>
            
        </section>
    )
}

export default Servicecards;