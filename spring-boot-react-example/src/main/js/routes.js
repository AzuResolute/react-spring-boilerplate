import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Home, Program
} from './components'

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route path="/program" component={Program} />
        <Route path="/" component={Home} />
        {/* <Route component={Home} /> */}
      </Switch>
    )
  }
}

export default withRouter(Routes);
