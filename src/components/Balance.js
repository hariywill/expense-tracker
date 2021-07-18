import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const Balance = () => {
    const { transactions } = useContext(AppContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, curV) => acc += curV, 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}