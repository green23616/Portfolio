import { BrowserRouter, Route, Routes } from 'react-router';
// Component
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
