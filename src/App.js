import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'
import FlipHomePage from './components/FlipHomePage'
import FlipCard from './components/FlipCardGame'
import RockPaperHomePage from './components/RockPaperHomePage'
import RockPaperGame from './components/RockPaperGame'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory-matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/card-flip-memory-game" component={FlipHomePage} />
    <Route exact path="/flip/card" component={FlipCard} />
    <Route exact path="/rock-paper-scissor" component={RockPaperHomePage} />
    <Route exact path="/rock/paper/scissor" component={RockPaperGame} />
  </Switch>
)

export default App
