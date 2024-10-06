
const PortfolioReducer = (state, action) => {
    
    // if(action.type === "SET LOADING"){
    //     return {
    //         ...state,
    //         isLoading: true,
    //     };
    // }

    // if(action.type === "PORTFOLIO_DATA_ERROR"){
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: true,
    //     };
    // }

    switch (action.type) {

        case "SET LOADING": return {
                                ...state,
                                isLoading: true,
                            };

        case "PORTFOLIO_DATA_ERROR": return {
                                ...state,
                                isLoading: false,
                                isError: true,
                            };

        // eslint-disable-next-line no-case-declarations
        case "SET_PORTFOLIO_DATA":  const PmsData = action.payload.filter((curItem) => {
                                    return curItem.pms === true;
                                    })
                                    return{
                                        ...state,
                                        isLoading: false,
                                        portfolios: action.payload,
                                        pms: PmsData,
                                    };

    
        default: return state;
    }
    
};

export default PortfolioReducer;