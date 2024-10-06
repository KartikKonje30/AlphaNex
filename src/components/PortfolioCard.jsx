import { NavLink } from "react-router-dom";


const PortfolioCard = (data) => {
  const {name, strategy, category, id} = data;
  return (
    <NavLink to={`/portfolio/${id}`} >
    <div className='p-4 mx-auto border border-slate-300 rounded-xl mb-4 hover:scale-105 hover:shadow-sm hover:shadow-indigo-200 transition-all duration-500'>
      <div className="text-black font-Aeonik font-normal">{name}</div>
      <div className="text-black font-Aeonik font-normal">{category}</div>
      <div className="text-black font-Aeonik font-normal" >{strategy}</div>
    </div>
    </NavLink>
  )
}

export default PortfolioCard;