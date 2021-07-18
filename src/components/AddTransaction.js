import React, { useState, useContext } from 'react';
import { AppContext } from '../context/context'
export const AddTransaction = () => {
    const { addTransaction } = useContext(AppContext)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text);
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount ..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}