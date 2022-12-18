import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import PnrChecker from './Components/PnrChecker';
import PnrResult from './Components/PnrResult';
import { Route, Routes } from 'react-router';


function App() {
  return (
  <Routes>
<Route index="/" element={<PnrChecker/>}/>
<Route path="/pnrresult" element={<PnrResult/>}/>
  </Routes>



  );
}

export default App;
