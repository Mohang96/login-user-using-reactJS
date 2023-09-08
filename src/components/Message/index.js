import './index.css'

const Message = props => {
  const {msgText} = props
  return <h1 className="msg-text">{msgText}</h1>
}

export default Message
