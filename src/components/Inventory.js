import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends Component {
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				<AddFishForm addFish={this.props.addFish} />
			</div>
		)
	}
}

export default Inventory