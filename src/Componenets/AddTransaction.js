import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-contol">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)} placeholder="Enter text...">
                    </input>
                </div>
                <div className="form-contol">
                    <label htmlFor="amount">
                        Amount <br />(negative - Expense, positive - Income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount...">
                    </input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>

    );
}

export default AddTransaction;