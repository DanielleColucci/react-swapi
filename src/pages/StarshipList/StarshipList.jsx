import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData)
    }
    fetchStarshipList()
  }, [])

  return (
    <div>List of ships goes here</div>
  )
}

export default StarshipList