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
      // <div className="App">
      //   <div className="container" style={{ marginTop: "80px" }} >
      //     <div className="row">
      //       <div className="col-lg-10 offset-lg-5 col-md-10 offset-md-5 col-sm-12 offset-sm-5 col-xs-12">
      //         <CreateTodo />
      //       </div>
      //       <Table />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
