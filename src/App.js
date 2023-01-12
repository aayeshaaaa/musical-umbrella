import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ComponentA from './components/componentA/index'
import ComponentB from './components/componentA/ComponentB'
import ComponentC from './components/componentA/ComponentC'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ComponentA} />
        <Route path="/componentB" component={ComponentB} />
        <Route path="/componentC" component={ComponentC} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
