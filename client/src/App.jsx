import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './pages/CategoriesPage';
import { TransactionsPage } from './pages/TransactionsPage'
import { StatisticsPage } from './pages/StatisticsPage';
import { Header } from './component/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/category' element={<CategoriesPage />} />
          <Route path='/transaction' element={<TransactionsPage />} />
          <Route path='/statistic' element={<StatisticsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
