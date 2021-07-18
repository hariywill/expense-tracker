import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export const IncomeExpense = () => {
    const { transactions } = useContext(AppContext)
    //use transaction to hold income and expense data
    //transaction has all the transaction, including income and expense
    //const income = 
    //const expense = 
    return (
        <div className="in-ex-container">
            <div>
                <h4>Income</h4>
                <p className='money plus'>where income shows</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>where expense shows</p>
            </div>
        </div>
    )
}