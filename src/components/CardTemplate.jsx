
const CardTemplate = ({title, description, path, svg}) => {
    return (
                <div className="relative max-w-screen-md border border-solid border-gray-200 shadow-md rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7 lg:col-span-3 md:col-span-6 transiton-all hover:scale-110 hover:bg-indigo-50/50 pointer">
                <div className=" mb-6 ">
                <svg width="50" height="50" viewBox="0 0 26 26 " fill="none">
                    {svg}
                </svg>
                </div>
                <h4 className="text-xl font-Aeonik font-medium text-gray-900 mb-2 transition-all duration-500 ">{title}</h4>
                <p className="text-sm font-Aeonik font-normal text-gray-500 transition-all duration-500 leading-5 mb-4">{description}</p>
                <a href={path} className="group flex items-center gap-2 text-sm font-semibold text-[#3248F2] transition-all duration-500 ">
                Learn More
                <svg className="transition-all duration-500  group-hover:translate-x-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5" stroke="#3248F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                </a>
                </div>
    )
}

export default CardTemplate;