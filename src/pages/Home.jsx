
import { NavLink } from "react-router-dom"
import Underconstruction from '../assets/Underconstruction.svg'

export default function Home () {
  return (
    <>
    <section className='flex justify-center items-center h-full w-full'>
      <div className="flex flex-col items-center justify-center pb-10 my-12 h-full w-full">
          <h2 className='section-subheading text-2xl bg-gradient-to-b from-[#3248f3] to-[#3248F2] text-transparent bg-clip-text'>AlphanexInvestment</h2>
          <h3 className='section-title text-slate-700 mt-8'>We'll Be Back Soon</h3>
          <p className='section-description w-1/2 my-4'>Our website is currently undergoing scheduled maintenance. We'll be back soon! Thank you for being patient. Contact us for more Information!</p>
          <a className='text-lg font-Aeonik font-normal text-black cursor-pointer border-slate-200 border-b-2 p-1' href="mailto:investments.kushal@gmail.com">support@alphanexinvestment.com</a>
          <img src={Underconstruction} className="w-[700px]" alt="Under construction image" />
      </div>
    </section>
    </>
  )
}
