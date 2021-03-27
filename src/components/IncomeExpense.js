import React from 'react';
import { useGlobalContext } from '../context/context';

export const IncomeExpense = () => {
    const { transaction } = useGlobalContext()
    //use transaction to hold income and expense data
    //transaction has all the transaction, including income and expemse
    //const income = 
    //const expense = 
    return (
        <div>
            <div className="income-expense">
                <h4>income</h4>
                <p className='money add'>where income shows</p>
            </div>
            <div>
                <h4>expense</h4>
                <p className='money minus'>where expense shows</p>
            </div>
        </div>
    )
}