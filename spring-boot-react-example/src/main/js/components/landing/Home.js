import React, { Component } from 'react';
import TechStack from '../tech/TechStack';
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
		super(props);
		this.state = {techStack: []};
    }
    
	componentDidMount = async () => {
		const {data} = await axios.get(`/api/techstack`);
        this.setState({techStack: data});
	}

    render() {
        const {techStack} = this.state
        return (
			<TechStack techStack={techStack}/>
        )
    }
}
