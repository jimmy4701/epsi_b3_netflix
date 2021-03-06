import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Navbar from './components/Navbar'
import UserContext from './contexts/UserContext'

const App = () => {

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Signin} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
