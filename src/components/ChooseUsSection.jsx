
import magnify from '../assets/magnify.svg'
import meter from '../assets/meter.svg'
import person from '../assets/person.svg'
import handshake from '../assets/handshake.svg'
import structure from '../assets/structure.svg'
import trophy from '../assets/trophy.svg'

const ChooseUsSection = () => {
    return (
         <section className="flex py-20 px-5 justify-center ">
            <div className="container bg-[#DBDFFF]/50 rounded-2xl">
                <div className="my-5 px-3 py-8 lg:p-8 lg:justify-center">
                <h2 className="section-title mb-6">Reasons to <span className=" text-[#3248F2]">choose us</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 p-8 items-center">
                    
                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={magnify} alt="magnify_icon" className='h-12' />
                    <h4 className="font-Aeonik text-base lg:text-lg text-center">
                    Targeted & Intensely 
                    <br />
                    Focused Portfolios</h4>
                    </div>
                    </div>

                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={meter} alt="magnify_icon" className='h-12' />
                    <h4 className="font-Aeonik text-base lg:text-lg  text-center">
                    Philosophies with 
                    <br />
                    Exceptional Performance</h4>
                    </div>
                    </div>

                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={person} alt="magnify_icon" className='h-12' />
                    <h4 className="font-Aeonik text-base lg:text-lg  text-center">
                    Skilled
                    <br /> 
                    Portfolio Managers </h4>
                    </div>
                    </div>

                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={handshake} alt="magnify_icon" className='h-10' />
                    <h4 className="font-Aeonik text-base lg:text-lg  text-center">
                    No Initial
                    <br /> 
                    Setup Fees</h4>
                    </div>
                    </div>

                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={structure} alt="magnify_icon" className='h-12' />
                    <h4 className="font-Aeonik text-base lg:text-lg  text-center">
                    Simplified Exit
                    <br />
                    Load Structures</h4>
                    </div>
                    </div>

                    <div className="" >
                    <div className='flex flex-col justify-center items-center gap-4 '>
                    <img src={trophy} alt="magnify_icon" className='h-12' />
                    <h4 className="font-Aeonik text-base lg:text-lg  text-center">
                    Top-tier 
                    <br />
                    Investment Services</h4>
                    </div>
                    </div>


                </div>
                </div>
            </div>
         </section>
    )
}

export default ChooseUsSection;
