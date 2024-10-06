

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// export default function Fetch() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get('https://v1.nocodeapi.com/kartikkonje/fbsdk/rIpSSsMACZfZQxIR/firestore/allDocuments?collectionName=people')
//     .then(res => setData(res._fieldsProto))
//     .catch(err => console.log(err));
//   }, []);
// console.log(data)
//   return (
//     <div>
//       <h1>Data fetched using Axios:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.name}>${item.name}</li>
//         ))}
//       </ul>
//     </div>  );
// }


const data = [
    {
      "name": "ABC",
      "category": 'MID-CAP',
      "strategy": 'ASDFG',
      "id": 1,
      "pms": true,
    },
    {
      "name": "PMS",
      "category": 'SMALL-CAP',
      "strategy": 'HJKLZX',
      "id": 2,
      "aif": true,
    },
    {
      capitalDetails: {
        cashEquivalent: -6.149142253440987,
        largeCap: 46.317351579357066,
        midCap: 38.88448684038503,
        smallCap: 20.947303833698896
      },
      companyDetails: {
        amcName: "Alchemy Capital Management Pvt Ltd.",
        aumInCrs: 482.002247288,
        benchmark: "S&P BSE 500",
        category: "Multi Cap",
        portfolioManagerName: "Hiren Ved ",
        reportingStructure: "Aggregate Portfolio",
        sebiRegNo: "IN/AIF3/17-18/0381 ",
        strategyIncpDate: 43103,
        strategyName:"Alchemy Leaders of Tomorrow",
      },
      feeDetails: {
        exitFee: {
          firstYear: 0.01,
          secondYear: "NA",
        },
        managementFee: {
          fixedFee: "Yes",
          hurdleFee: 10,
          performanceFee: "NA",
          variableFee:"NA",
        }
      },
      otherDetails:{
        sipOption: "No",
        stpOption: "NO",
      },
      performnaceDetails: {
        index: {
          oneMonth: 1.513160731998342,
          oneYear: 37.653493923921324,
          sixMonth: 18.35563355626109,
          tenYear: "NA",
          threeMonth: 11.72399826597095,
          threeYear: 17.91972688851486,
          twoYear: 18.180633853247947,
        },
        strategy: {
          oneMonth: 2.1,
          oneYear: 56.159040406318695,
          sixMonth: 18.31894741669091,
          tenYear: "NA",
          threeMonth: 6.863193224228703,
          threeYear: 25.032430287201457,
          twoYear: 20.669271245946263,
        }
      },
      riskRatioDetails: {
        alpha: 3.368964084272874,
        avgHistoricalChurning: "NA",
        beta: 84.90533240714066,
        pE: "NA",
        sharpeRatio: 55.24788043217722,
        stdDeviation: 19.057486702144292,
      },
      sectorDetails: {
        topFive:{
          inPercentage: 5.464341755002538,
          name: "Communication Services"
        },
        topFour: {
          inPercentage: 7.256916388801696,
          name: "Consumer Staples"
        },
        topOne: {
          inPercentage: 37.63020326650769,
          name: "Consumer Discretionary"
        },
        topThree: {
          inPercentage: 16.8025098712511,
          name: "Information Technology"
        },
        topTwo: {
          inPercentage: 22.55880047318309,
          name: "Industrials"
        }
      },
      stockDetails: {
        topFive: {
          inPercentage: 6.930984297751267,
          name: "DIXON TECHNOLOGIES INDIA LTD DIXON IN"
        },
        topFour: {
          inPercentage: 7.256916388801696,
          name: "UNITED SPIRITS LTD UNSP IN"
        },
        topOne: {
          inPercentage: 9.045352037739967,
          name: "ABB INDIA LTD ABB IN"
        },
        topThree: {
          inPercentage: 8.06147695474286,
          name: "TRENT LTD TRENT IN"
        },
        topTwo: {
          inPercentage: 8.115677946968784,
          name: "KDDL LTD KDDL IN"
        }
      }
    }
    
  ]

export default data;