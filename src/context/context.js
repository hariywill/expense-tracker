import React, { useReducer } from 'react'
import { reducer } from './reducer';

const initialState = {
    transactions: [
        /* { id: 1, text: "food1", amount: 300 },
        { id: 2, text: "food2", amount: -3 },
        { id: 3, text: "food3", amount: -40 },
        { id: 4, text: "food4", amount: 303 }, */
    ] //An [] of {}s
}

const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <AppContext.Provider
            value={{ 
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
             }}
        >
            {children}
        </AppContext.Provider>
        )
}


export { AppContext, AppProvider }
