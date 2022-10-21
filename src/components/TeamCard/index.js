import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    console.log(item)
    const {teamImageUrl, name, id} = item
    return (
      <Link to={`/team-matches/${id}`} className="team-lists">
        <li className="team-cards">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-heading">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
