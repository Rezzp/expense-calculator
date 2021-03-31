import React from 'react';

const IncomeExpense = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">$1000</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">$300</p>
            </div>

        </div>
    );

}

export default IncomeExpense;