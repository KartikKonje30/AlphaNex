// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import Fetch from '../fetch/Fetch'
import axios from "axios";
import reducer from '../reducer/PortfolioReducer'

const AppContext = createContext();

const initialState = {
      isLoading: false,
      isError: false,
      portfolios: [],
      pms: [],
}

const AppProvider = ({ children }) => {
      
      const [state, dispatch] = useReducer(reducer, initialState);

      const getPortfolios = async(url) => {
            dispatch({type: "SET LOADING"});
            try {
                  // const res = await axios.get(url);
                  // console.log(res);
                  const portfolios = await url;
                  console.log(portfolios);
                  dispatch({type:"SET_PORTFOLIO_DATA", payload: portfolios })
            } catch (error) {
                  dispatch({type:"PORTFOLIO_DATA_ERROR"})
            //       console.log(error.message);
            }
      }

      useEffect(()=> {
            getPortfolios(Fetch);
            // dispatch({type: "SET LOADING"});
            // try {
            //       const data  = Fetch;
            //       console.log(data);
            //       dispatch({type:"MY_PORTFOLIO_DATA", payload: data })
            // } catch (error) {
            //       dispatch({type:"PORTFOLIO_DATA_ERROR"})
            //       console.log(error.message);
            // }
      },[])
      
      return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const usePortfolioContext = () => {
      return useContext(AppContext);
}

export { AppProvider, AppContext, usePortfolioContext }