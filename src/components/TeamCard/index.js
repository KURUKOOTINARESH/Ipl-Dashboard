// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="team-card-con">
          <img src={teamImageUrl} alt={name} className="team-card-img" />
          <p className="team-card-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
