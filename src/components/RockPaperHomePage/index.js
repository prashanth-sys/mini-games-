import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const FlipHomePage = () => (
  <div className="flip-home-page">
    <div className="back-icon">
      <Link to="/" className="link">
        <button type="button" className="back-button">
          <BiArrowBack className="icon" />
          <p className="back">Back</p>
        </button>
      </Link>
    </div>

    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572327/Layer_2_yiiit6.png"
      alt="card flip memory game"
      className="flip-image"
    />
    <h1 className="rules">Rules</h1>
    <ul className="rules-list-container">
      <li>
        When the game is started, the users should be able to see the list of
        Cards that are shuffled and turned face down.
      </li>

      <li>
        When a user starts the game, the user should be able to see the Timer
        running.
      </li>

      <li>The Timer starts from 2 Minutes.</li>

      <li>
        If the two cards have the same image, they remain face up. If not, they
        should be flipped face down again after a short 2 seconds.
      </li>

      <li>Users should be able to compare only two cards at a time.</li>

      <li>
        When the user is not able to find all the cards before the timer ends
        then the game should end and redirect to the Time Up Page.
      </li>

      <li>
        If the user finds all the matching cards before the timer ends, then the
        user should be redirected to the results page.
      </li>
    </ul>
    <Link to="/rock/paper/scissor" className="link">
      <button className="flip-start-button" type="button">
        Start playing
      </button>
    </Link>
  </div>
)
export default FlipHomePage
