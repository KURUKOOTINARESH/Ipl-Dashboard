// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getIplDashboardList()
  }

  getIplDashboardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const transferredData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({isLoading: false, teamsList: transferredData})
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="home-con">
        <div className="home-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        <div className="dashboard-section">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="dashboard-con">
              {teamsList.map(eachItem => (
                <TeamCard details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
