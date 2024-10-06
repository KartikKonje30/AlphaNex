
import Logo from '../assets/sample_logo.png'

const LogoTicker = () => {
    
    return (
        <div className='py-8 lg:pb-12 bg-[#3248F2] flex justify-center'>
            <div className="container">
                <div className='flex justify-center'>
                <h2 className='text-[14px] pb-8 lg:pb-10 md:text-xl lg:text-2xl font-Aeonik font-normal text-white '>In Colaboration with Top 10 Fastest Growing Firms</h2>
                </div>
                <div className="flex overflow-hidden justify-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <div className='flex gap-16'>
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                    <img src={Logo} alt="Sample Logo" className='logo-ticker-image md:h-9 lg:h-14' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default LogoTicker;