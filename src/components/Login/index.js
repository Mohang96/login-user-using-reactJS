import {Component} from 'react'
import './index.css'

class Login extends Component {
  loginBtnClicked = () => {
    const {loginClicked} = this.props
    loginClicked()
  }

  render() {
    return (
      <button className="button" type="button" onClick={this.loginBtnClicked}>
        Login
      </button>
    )
  }
}

export default Login
