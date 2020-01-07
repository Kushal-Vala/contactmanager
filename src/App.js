import React, { Component } from 'react'

    //INSTALL npm install react-router-dom TO USE REACT ROUTER, AND IMPORT...
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Contacts from './components/Contact/Contacts'
import Header from './components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from './components/Contact/Context';
import Addcontact from './components/Contact/Addcontact';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';
import Test from './components/test/Test';
import Editcontact from './components/Contact/EditContact';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              
              {/* USE ROUTER, SWITCH AND ROUTE TO ADD COMPONENTS TO RUN ON DIFFERENT PAGES */}
              <Switch>
                <Route exact path="/" 
                  component={Contacts} />
                <Route exact path="/contact/add" 
                  component={Addcontact} />
                
                {/* // to redirect on the page or pass ID */}
                <Route exact path="/contact/edit/:id" 
                  component={Editcontact} />
                
                <Route exact path="/about" 
                  component={About} />
                
                <Route exact path="/test" 
                  component={Test} />
                <Route component={Notfound} />
              </Switch>    
            </div>   
          </div>
        </Router>
      </Provider>
    )
      }
    }
