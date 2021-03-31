import React from 'react';

const TransactionList = () => {

    return (
        <div>
            <h3> History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
                <li className="minus">Cable <span>-$40</span><button className="delete-btn">x</button></li>
                <li className="plus">Salary <span>$4800</span><button className="delete-btn">x</button></li>
                <li className="minus">Rent <span>-$1400</span><button className="delete-btn">x</button></li>
            </ul>
        </div>

    );
}
export default TransactionList;