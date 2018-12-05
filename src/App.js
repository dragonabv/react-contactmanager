import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";
import Test from "./components/Test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    const home_url = "/react-contactmanager";
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path={`${home_url}/`} component={Contacts} />
                <Route
                  exact
                  path={`${home_url}/contact/add`}
                  component={AddContact}
                />
                <Route
                  exact
                  path={`${home_url}/contact/edit/:id`}
                  component={EditContact}
                />
                <Route exact path={`${home_url}/about`} component={About} />
                <Route exact path={`${home_url}/test`} component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;