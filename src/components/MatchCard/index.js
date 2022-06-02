// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = details
  const resultClassName = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="recent-match-con">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team">{competingTeam}</p>
      <p className="text">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
