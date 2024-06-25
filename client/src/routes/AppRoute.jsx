import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { CategoriesPage } from '../pages/CategoriesPage';
import { TransactionsPage } from '../pages/TransactionsPage'
import { StatisticsPage } from '../pages/StatisticsPage';
import { HomePage } from '../pages/HomePage';
import App from '../App';

export const Root = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Finance</title>
      </Helmet>
        <main>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route path='home' element={<Navigate to='/' replace />} />
              <Route path='category' element={<CategoriesPage />} />
              <Route path='transaction' element={<TransactionsPage />} />
              <Route path='statistic' element={<StatisticsPage />} />
              <Route path='*' element={<HomePage />} />
            </Route>
          </Routes>
        </main>
    </Router>
  );
};

