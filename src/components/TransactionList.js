import React, { useContext } from 'react';
import { Transaction } from './Transaction';

//imp useGlobalContext from context
import { useGlobalContext } from '../context/context';

export const TransactionList = () => {
    const { transaction } = useGlobalContext()
    
    return (
        <div>
            <h3>transaction history</h3>
            {/* transactions.map() return <Transaction /> */}
            <Transaction />
        </div>
    )
}