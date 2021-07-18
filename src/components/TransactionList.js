import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { AppContext } from '../context/context';

export const TransactionList = () => {
    const { transactions } = useContext(AppContext)
    
    return (
        <div>
            <h3>transaction history</h3>
            <ul className="list">
                {/* transactions.map() return <Transaction /> */}
                <Transaction />
            </ul>
        </div>
    )
}