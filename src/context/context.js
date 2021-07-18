import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer';

const initialState = {
    transactions: [] //An [] of {}s
}

const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addTransaction = (id) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: id
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
