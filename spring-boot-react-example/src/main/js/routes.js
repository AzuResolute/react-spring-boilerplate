import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Home, Program
} from './components'

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/program" component={Program} />
        {/* <Route component={Home} /> */}
      </Switch>
    )
  }
}

export default withRouter(Routes);

// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
