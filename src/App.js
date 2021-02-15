import { Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import ManageUsers from './Components/ManageUsers';
import ManageRelations from './Components/ManageRelations';
import TrackRelation from './Components/TrackRelation';

function App() {
  useEffect(() => {
    const setApp = async () => {
      const res = await fetch("https://relation-tracker.glitch.me/");
      const data = await res;
      console.log(data);
    };
    setApp();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Relation Manager 🔥  </h1>
          <div className="nav">
            <div className="linkbuttons">
              <NavLink to="/" className="routeLink">Manage Users</NavLink>
              <NavLink to="/ManageRelations" className="routeLink">Manage Relations</NavLink>
              <NavLink to="/TrackRelation" className="routeLink">Track Relations</NavLink>
            </div>
          </div>
        </header>
        <Route exact path="/" component={ManageUsers} />
        <Route path="/ManageRelations" component={ManageRelations} />
        <Route path="/TrackRelation" component={TrackRelation} />
      </BrowserRouter>
      <footer>Don't refresh page you may loss your saved data.</footer>
    </div>
  );
}

export default App;
