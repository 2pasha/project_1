import React, { useState, useEffect, useCallback } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const TransactionReports = ({ transactions }) => {
  const [expensesVsRevenues, setExpensesVsRevenues] = useState({});
  const [expenseCategories, setExpenseCategories] = useState({});
  const [revenueCategories, setRevenueCategories] = useState({});
  const [dailyAmounts, setDailyAmounts] = useState({});

  const processTransactions = useCallback(() => {
    const expVsRev = { expenses: 0, revenues: 0 };
    const expCat = {};
    const revCat = {};
    const daily = {};
  
    transactions.forEach(transaction => {
      const amount = Number(transaction.amount);
      const category = transaction.category;
      const date = new Date(transaction.date).toISOString().split('T')[0];
      const operationType = transaction.operationType.toLowerCase();
    
      if (operationType === 'expenses') {
        expVsRev.expenses += amount;
        expCat[category] = (expCat[category] || 0) + amount;
      } else if (operationType === 'revenues') {
        expVsRev.revenues += amount;
        revCat[category] = (revCat[category] || 0) + amount;
      } else {
        console.log(`Unknown operationType: ${operationType}`);
      }
  
      daily[date] = (daily[date] || 0) + amount;
    });
  
    setExpensesVsRevenues(expVsRev);
    setExpenseCategories(expCat);
    setRevenueCategories(revCat);
    setDailyAmounts(daily);
  }, [transactions]);

  useEffect(() => {
    if (transactions.length > 0) {
      processTransactions();
    }
  }, [transactions, processTransactions]);

  const expensesVsRevenuesData = {
    labels: ['Expenses', 'Revenues'],
    datasets: [
      {
        label: 'Amount',
        data: [expensesVsRevenues.expenses, expensesVsRevenues.revenues],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const expenseCategoriesData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const revenueCategoriesData = {
    labels: Object.keys(revenueCategories),
    datasets: [
      {
        data: Object.values(revenueCategories),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const dailyAmountsData = {
    labels: Object.keys(dailyAmounts).sort(),
    datasets: [
      {
        label: 'Daily Transaction Amounts',
        data: Object.keys(dailyAmounts).sort().map(date => dailyAmounts[date]),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartContainerStyle = {
    width: '400px',
    height: '400px', 
    padding: '10px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (

    <div>
      {transactions.length > 0 ? (
        <div className='fixed-grid'>
          <div className='grid' >
            <div 
              style={chartContainerStyle}
              className='cell'
            >
              <h3>Expenses vs Revenues</h3>
              <Bar data={expensesVsRevenuesData} />
            </div>

            <div 
              style={chartContainerStyle}
              className='cell'
            >
              <h3>Expense Categories</h3>
              <Pie data={expenseCategoriesData} />
            </div>
            
            <div 
              style={chartContainerStyle}
              className='cell'
            >
              <h3>Revenue Categories</h3>
              <Pie data={revenueCategoriesData} />
            </div>
            
            <div 
              style={chartContainerStyle}
              className='cell'
            >
              <h3>Daily Transaction Amounts</h3>
              <Line data={dailyAmountsData} />
            </div>
          </div>
        </div>
      ) : (
        <p>No transactions found for the selected date range.</p>
      )}
      
    </div>
  );
};

export default TransactionReports;