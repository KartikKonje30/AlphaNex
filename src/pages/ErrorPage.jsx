
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex justify-center'>
      <div className="container flex flex-col items-center justify-center section-heading gap-4 pb-10 my-12">

          <h2 className='section-title text-7xl'>404</h2>
          <h3 className='section-subheading text-slate-700'>UH! OH! You're Lost.</h3>
          <p className='section-description'>The page you are looking for does not exist. How you got here is a mystery. But you can click on the button below to go back to the homepage.</p>
        <NavLink to='/'>
        <button className='px-5 py-4 rounded-lg font-Aeonik font-normal inline-flex items-center justify-center btn-primary uppercase transition-all duration-500 hover:bg-[#1428aa] hover:scale-90'>Go Back To Home</button>
        </NavLink>
      </div>
    </section>
  )
}

export default ErrorPage