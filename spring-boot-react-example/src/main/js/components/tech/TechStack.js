import React, { Component } from 'react'
import Tech from './Tech'

export default class TechStack extends Component {
    render() {
        
        const techStack = this.props.techStack.map(t => 
            <Tech key={t.name} tech={t} />
        )
        
        return (
			<table>
				<tbody>
				<tr>
				    <th colSpan={4} style={{backgroundColor:" #c0ffee"}}>Tech Stacks</th>
				</tr>
					<tr>
						<th>Tech</th>
						<th>Description</th>
						<th>Type</th>
						<th>Language</th>
					</tr>
					{techStack}
				</tbody>
			</table>
        )
    }
}
