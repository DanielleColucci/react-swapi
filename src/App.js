import './App.css';
import { Routes, Route } from 'react-router-dom';

import StarshipList from './pages/StarshipList/StarshipList'
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} /> 
      </Routes>
    </>
  );
}

export default App;
