import { Route, Routes } from "react-router-dom";
import Dashboard01 from './pages/dashboards/Dashboard01';
import Dashboard02 from "./pages/dashboards/Dashboard02";
import Dashboard03 from "./pages/dashboards/Dashboard03";
import Dashboard04 from "./pages/dashboards/Dashboard04";
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {/* Dashboard */}
      <Route path='/dashboard01' element={<Dashboard01 />} />
      <Route path='/dashboard02' element={<Dashboard02 />} />
      <Route path='/dashboard03' element={<Dashboard03 />} />
      <Route path='/dashboard04' element={<Dashboard04 />} />

    </Routes>
  );
}

export default App;
