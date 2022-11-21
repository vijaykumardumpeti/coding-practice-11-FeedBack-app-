// Write your React code here.

import {Component} from 'react'
import './index.css'

export default class Feedback extends Component {
  state = {
    feedbackGiven: false,
  }

  updateState = () => {
    this.setState(prevState => ({feedbackGiven: !prevState.feedbackGiven}))
  }

  displayFunction = () => {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {feedbackGiven} = this.state

    if (feedbackGiven === false) {
      return (
        <div className="white-container-1">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            {emojis.map(emojiObject => (
              <button
                onClick={this.updateState}
                className="button-style"
                type="button"
              >
                <li key={emojiObject.id} className="emoji-container">
                  <img
                    className="emoji"
                    src={emojiObject.imageUrl}
                    alt={emojiObject.name}
                  />
                  <h1 className="emoji-heading">{emojiObject.name}</h1>
                </li>
              </button>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="white-container-2">
        <img alt="love emoji" src={loveEmojiUrl} className="love-emoji" />
        <h1>Thank You</h1>
        <p className="thanks-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.displayFunction()}</div>
  }
}
