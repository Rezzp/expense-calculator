import './App.css';
import AddTransaction from './Componenets/AddTransaction';
import Balance from './Componenets/Balance';
import Header from './Componenets/Header';
import IncomeExpense from './Componenets/IncomeExpense';

import TransactionList from './Componenets/TransactionList';

function App() {
  return (
    <div >
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
