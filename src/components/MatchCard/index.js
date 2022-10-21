// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {item} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = item
    return (
      <li className={`ipl-match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="ipl-img"
        />
        <p className="ipl-match-heading">{competingTeam}</p>
        <p className="ipl-match-result">{result}</p>
        <p
          className={`ipl-match-status ${
            matchStatus === 'Won' ? 'won' : 'lost'
          }`}
        >
          {matchStatus}
        </p>
      </li>
    )
  }
}

export default MatchCard
