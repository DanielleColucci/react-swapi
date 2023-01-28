import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StarshipPage = (props) => {
  const location = useLocation()
  const { index } = useParams() 

  const currentStarship = props.findCurrent(location.state, index)

  return (
    <div className="starship-page">
      <div className="details-container">
        <p>NAME:</p>
        <p>{currentStarship.name}</p>
        <p>MODEL: </p>
        <p>{currentStarship.model}</p>
        <Link to='/'>RETURN</Link>
      </div>
    </div>
  )
}

export default StarshipPage