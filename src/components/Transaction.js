import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const Transaction = ({ data: { id, text, amount} }) => {
    const { deleteTransaction } = useContext(AppContext)
    const sign = amount > 0 ? "+" : "-"
    
    return (
        <li className={amount>0 ? "plus" : "minus"}>
            {text} 
            <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
}