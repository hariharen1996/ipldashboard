import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getUpdatedData = item => ({
    id: item.id,
    umpires: item.umpires,
    result: item.result,
    manOfTheMatch: item.man_of_the_match,
    date: item.date,
    venue: item.venue,
    competingTeam: item.competing_team,
    competingTeamLogo: item.competing_team_logo,
    firstInnings: item.first_innings,
    secondInnings: item.second_innings,
    matchStatus: item.match_status,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getUpdatedData(data.latest_match_details),
      recentMatchDetails: data.recent_matches.map(item =>
        this.getUpdatedData(item),
      ),
    }

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatchDetails} = teamData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-background ${id}`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="team-banner">
              <img src={teamBannerUrl} className="banner" alt="team banner" />
            </div>

            <h1 className="match-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="ipl-match-container">
              {recentMatchDetails.map(item => (
                <MatchCard item={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
