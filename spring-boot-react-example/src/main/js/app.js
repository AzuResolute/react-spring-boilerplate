import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import Routes from './routes';
import history from './history'

class App extends Component {

	render() {
		return (
			<Routes/>
		)
	}
}

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('react')
)