import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TechStack from "./components/tech/TechStack";
import axios from 'axios'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {techStack: []};
	}

	componentDidMount = async () => {
		const {data} = await axios.get(`/api/techstack`);
		console.log(data)
        this.setState({techStack: data});
	}

	render() {
		return (
			<TechStack techStack={this.state.techStack}/>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)