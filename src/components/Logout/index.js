// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  logoutBtnClicked = () => {
    const {logoutClicked} = this.props
    logoutClicked()
  }

  render() {
    return (
      <button className="button" type="button" onClick={this.logoutBtnClicked}>
        Logout
      </button>
    )
  }
}

export default Logout
