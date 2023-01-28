import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <div className="list">
      <h1>Starship List</h1>
      <div className="list-container">
        {starships.length ? 
          <>
            {starships.map(starship => (
              <div className="starship-card" key={starship.name}>
                <Link 
                  to={`/starship/${starship.url.split('/')[5]}`} 
                  state={starships}
                >
                  {starship.name}
                </Link>
              </div>
            ))}
          </>
          :
          <h3>Loading starships...</h3>
        }
      </div>
    </div>
  )
}

export default StarshipList