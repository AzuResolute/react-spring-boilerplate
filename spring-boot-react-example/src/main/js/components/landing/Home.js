import React, { Component } from 'react';
import TechStack from '../tech/TechStack';
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
		super(props);
		this.state = {techStack: []};
    }
    
	componentDidMount = async () => {
        const {data} = await axios.get(`/api/teches`);
        const techStack = data._embedded.teches
        console.log(data);
        console.log(techStack);
        this.setState({techStack});
	}

    render() {
        const {techStack} = this.state
        return (
			<TechStack techStack={techStack}/>
        )
    }
}
