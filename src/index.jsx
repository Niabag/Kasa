import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './pages/Erorr'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <div className='align-page'>
        <Navbar/>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/about">
                  <About />
              </Route>
              <Route>
                  <Error />
              </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)