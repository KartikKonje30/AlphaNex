import data from '../fetch/Fetch'
import PortfolioCard from '../components/PortfolioCard'

const PortfolioList = () => {
  
  console.log(data[2].performnaceDetails.index.sixMonth);
  console.log(data[2].sectorDetails.topFour.inPercentage);

  return (
    <div>
    PortfolioList
    {
      data.map((item) => {
        return <PortfolioCard {...item} key={item.id} />
      })
    }
    <div className='container'>
      <div>
        <h1>{data[2].companyDetails.amcName}</h1>
        <h2>Category : {data[2].companyDetails.category}</h2>
        <p>Performance : {data[2].performnaceDetails.index.oneMonth}</p>
      </div>
    </div>
    </div>
  )
}

export default PortfolioList