import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

// Get all expenses
export const getExpenses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new expense
export const addExpense = async (expense) => {
  const response = await axios.post(API_URL, expense);
  return response.data;
};

