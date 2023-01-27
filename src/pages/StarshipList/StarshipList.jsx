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
    <>
      <h1>Starships</h1>
      {starships.length ? 
        <>
          {starships.map(starship => (
            <div key={starship.name}>
              <Link to={`/starship`} state={starship}>{starship.name}</Link>
            </div>
          ))}
        </>
        :
        <h3>Loading starships...</h3>
      }
    </>
  )
}

export default StarshipList