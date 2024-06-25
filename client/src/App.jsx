import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './pages/CategoriesPage';
import { TransactionsPage } from './pages/TransactionsPage'
import { StatisticsPage } from './pages/StatisticsPage';
import { HomePage } from './pages/HomePage';
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
            <Route path='/' >
              <Route index element={<HomePage />} />
              <Route path='/category' element={<CategoriesPage />} />
              <Route path='/transaction' element={<TransactionsPage />} />
              <Route path='/statistic' element={<StatisticsPage />} />
            </Route>
          </Routes>
        </main>
    </Router>
  );
}

export default App;
