import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(item => ({
      id: item.id,
      teamImageUrl: item.team_image_url,
      name: item.name,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="logo-text">IPL Dashboard</h1>
        </div>
        <ul className="team-container">
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader">
              <Loader type="Rings" color="#00BFFF" height={80} width={80} />{' '}
            </div>
          ) : (
            data.map(item => <TeamCard key={item.id} item={item} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
