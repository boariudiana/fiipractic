import React from 'react'
import './styles/index.scss';
import Header from './containers/Header'
import { Route ,BrowserRouter, Switch} from 'react-router-dom'

import HomePage from '../src/containers/HomePage';
import AboutPage from '../src/containers/AboutPage';
import ProductsPage from '../src/containers/ProductsPage'

const App = ( ) => {
  return(
    <BrowserRouter>
       <div>
          <Header />
          <Switch>
            <Route path = {"/"} exact render = { ()=> (<HomePage />)}/>
            <Route path = {"/about"} component = {AboutPage}/>
            <Route path = {"/products"} component = {ProductsPage}/>
          </Switch>
      </div>
    </BrowserRouter>
)
}

export default App;
