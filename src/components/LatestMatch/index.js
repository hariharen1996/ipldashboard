import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails
    return (
      <div className="card-container">
        <div className="card-container-match">
          <div className="match-names">
            <p className="card-heading">{competingTeam}</p>
            <p className="match-text">{date}</p>
            <p className="match-text">{venue}</p>
            <p className="match-text">{result}</p>
          </div>
          <div className="img-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="match-img"
            />
          </div>
        </div>
        <div className="match-content">
          <div className="first-innings">
            <p className="content-heading">First Innings</p>
            <p className="content-text">{firstInnings}</p>
          </div>
          <div className="second-innings">
            <p className="content-heading">Second Innings</p>
            <p className="content-text">{secondInnings}</p>
          </div>
          <div className="man-of-match">
            <p className="content-heading">Man Of The Match</p>
            <p className="content-text">{manOfTheMatch}</p>
          </div>
          <div className="umpire">
            <p className="content-heading">Umpires</p>
            <p className="content-text">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
