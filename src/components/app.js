import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './navbar'

// import pages
import { Home } from '../pages/home'
import { About } from '../pages/about'
import { SingleDrink } from '../pages/single-drink'
import { Error } from '../pages/error'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/drink/:id">
          <SingleDrink />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
