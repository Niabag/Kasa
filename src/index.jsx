import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './pages/Erorr'
import Lodging from './pages/Lodging'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="align-page">
        <Switch>
          <Route exact path="/kasa">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/404">
            <Error/>
          </Route>
          <Route exact path="/kasa/:id([0-9a-z]{8})">
              <Lodging/>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
