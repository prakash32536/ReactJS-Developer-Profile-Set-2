import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/summary/:id" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
