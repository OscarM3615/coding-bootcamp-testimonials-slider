import React, { Component } from 'react'
import './Slider.css'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			testimonials: props.data
		}
	}

	render() {
		return (
			<div className="slider">
				{this.state.testimonials[0].name}
			</div>
		)
	}
}

export default Slider