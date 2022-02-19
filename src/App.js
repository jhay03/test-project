import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import UsersList from "./components/Users";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Navbar />
        </Route>
        <div className="children" style={{ minHeight: "83vh" }}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/users">
              <UsersList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
