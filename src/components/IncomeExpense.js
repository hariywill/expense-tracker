import React, { useContext } from 'react';
import { AppContext } from '../context/context';

export const IncomeExpense = () => {
    const { transactions } = useContext(AppContext)
    //use transaction to hold income and expense data
    //transaction has all the transaction, including income and expense
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, curV) => acc += curV, 0)
        .toFixed(2)
    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, curV) => acc += curV, 0)
        .toFixed(2)
        
    return (
        <div className="in-ex-container">
            <div>
                <h4>Income</h4>
                <p className='money plus'>{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>{expense}</p>
            </div>
        </div>
    )
}