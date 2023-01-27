import './App.css';
import { Routes, Route } from 'react-router-dom';

import StarshipList from './pages/StarshipList/StarshipList'
import Header from './components/Header/Header';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  const findCurrent = (starshipArr, index) => {
    let currentStarship = {}
    starshipArr.forEach(starship => {
      if (starship.url.split('/')[5] === index) currentStarship = starship
    })
    return currentStarship
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} /> 
        <Route path='/starship/:index' element={<StarshipPage findCurrent={findCurrent} />}/>
      </Routes>
    </>
  );
}

export default App;
