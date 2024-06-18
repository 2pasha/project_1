import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './pages/CategoriesPage';
import { TransactionsPage } from './pages/TransactionsPage'
import { StatisticsPage } from './pages/StatisticsPage';
import { Header } from './component/Header';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Finance</title>
      </Helmet>
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
