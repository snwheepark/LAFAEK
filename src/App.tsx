import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { PetroleumFund } from './pages/PetroleumFund';
import { Economy } from './pages/Economy';
import { PopulationLabor } from './pages/PopulationLabor';
import { HumanDevelopment } from './pages/HumanDevelopment';
import { GovernmentBudget } from './pages/GovernmentBudget';
import { PolicyDebates } from './pages/PolicyDebates';
import { GeopoliticalContext } from './pages/GeopoliticalContext';
import { About } from './pages/About';
import { AskLafaek } from './pages/AskLafaek';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8' }}>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/petroleum-fund" element={<PetroleumFund />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/population-labor" element={<PopulationLabor />} />
            <Route path="/human-development" element={<HumanDevelopment />} />
            <Route path="/government-budget" element={<GovernmentBudget />} />
            <Route path="/policy-debates" element={<PolicyDebates />} />
            <Route path="/geopolitical-context" element={<GeopoliticalContext />} />
            <Route path="/about" element={<About />} />
            <Route path="/ask" element={<AskLafaek />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
