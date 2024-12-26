import { BrowserRouter, Route, Routes } from 'react-router';
// Component
import Main from './pages/Main';
import Header from './pages/components/header/Header';
import Footer from './pages/components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
