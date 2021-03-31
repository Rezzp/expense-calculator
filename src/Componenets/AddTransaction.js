import React, { useState } from 'react';

const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");


    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
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