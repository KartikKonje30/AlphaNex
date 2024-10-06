
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import PortfolioList from '../components/PortfolioList'


export default function PMS () {


  return (
    <>
    
    <section>
      <div className="container grid grid-cols-2">
        
        <div>
          <FilterSection />
        </div>

        <div>
          
          <div>
            <Sort />
          </div>
          
          <div>
            <PortfolioList />
          </div>
        
        </div>
      </div>
    </ section>
    </>
    
  )
}

