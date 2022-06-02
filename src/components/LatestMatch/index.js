// Write your code here
import './index.css'

const LatestMatch = props => {
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
  return (
    <div className="latest-match-con">
      <div className="latest-match-competing-team-details-con">
        <div className="details-con">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="text">{venue}</p>
          <p className="text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo-lg"
      />
      <div className="latest-match-results-con">
        <p className="text">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="text">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="text">Man Of The Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="text">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
