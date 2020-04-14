import React, { Component } from 'react'

export default class Tech extends Component {
    render() {
        const {name, description, layer, language} = this.props.tech
        return (
			<tr>
				<td>{name}</td>
				<td>{description}</td>
				<td>{layer}</td>
				<td>{language}</td>
			</tr>
        )
    }
}
