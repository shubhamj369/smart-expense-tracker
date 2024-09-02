import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>Smart Expense Tracker</h1>
      <AddExpense onAdd={handleAdd} />
      <ExpenseList key={refresh} />
    </div>
  );
}

export default App;
