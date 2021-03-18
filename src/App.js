import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState({});
  
  return (
      <userContext.Provider value={[currentUser, setCurrentUser]}>
          <Router>
              <h1>{currentUser.displayName}</h1>
              <h1>{currentUser.email}</h1>
              <Header />
              <Switch>
                  <Route path="/home">
                      <Home />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
                  <PrivateRoute path="/book/:bedType">
                      <Book />
                  </PrivateRoute>
                  <Route exact path="/">
                      <Home />
                  </Route>
              </Switch>
          </Router>
      </userContext.Provider>
  );
}

export default App;
