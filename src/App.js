import './App.css';
import { Routes, Route } from 'react-router-dom';

import StarshipList from './pages/StarshipList/StarshipList'
import Header from './components/Header/Header';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} /> 
        <Route path='/starship' element={<StarshipPage />}/>
      </Routes>
    </>
  );
}

export default App;
