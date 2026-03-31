import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardTanques } from './features/dashboard/DashboardTanques';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tanques/mapa" element={<DashboardTanques />} />
      </Routes>
    </Router>
  );
}

export default App;