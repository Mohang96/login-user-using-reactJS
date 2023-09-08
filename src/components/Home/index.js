import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isClicked: false, msgText: 'Please Login'}

  loginClicked = () => {
    this.setState({
      msgText: 'Welcome User',
      isClicked: true,
    })
  }

  logoutClicked = () => {
    this.setState({
      msgText: 'Please Login',
      isClicked: false,
    })
  }

  render() {
    const {isClicked, msgText} = this.state
    return (
      <div className="background">
        <div className="card-background">
          <Message msgText={msgText} />
          {isClicked && <Logout logoutClicked={this.logoutClicked} />}
          {!isClicked && <Login loginClicked={this.loginClicked} />}
        </div>
      </div>
    )
  }
}

export default Home
