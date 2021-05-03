import './App.css';
import AddTransaction from './Componenets/AddTransaction';
import Balance from './Componenets/Balance';
import Header from './Componenets/Header';
import IncomeExpense from './Componenets/IncomeExpense';

import TransactionList from './Componenets/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
