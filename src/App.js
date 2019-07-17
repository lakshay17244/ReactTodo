import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={CreateTodo} />
          <Route path='/table' component={Table} />
        </Switch>
      </main>
    );
  }
}

export default App;
