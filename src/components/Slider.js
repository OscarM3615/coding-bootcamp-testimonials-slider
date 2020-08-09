import React, { Component } from 'react'
import './Slider.css'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			testimonials: props.data,
			currentIndex: 0
		}

		this.goPrev = this.goPrev.bind(this)
		this.goNext = this.goNext.bind(this)
	}

	goPrev() {
		let newIndex = this.state.currentIndex - 1
		if (newIndex < 0) newIndex = this.state.testimonials.length - 1

		this.setState((prevState) => ({
			testimonials: prevState.testimonials,
			currentIndex: newIndex
		}))
	}

	goNext() {
		let newIndex = this.state.currentIndex + 1
		if (newIndex === this.state.testimonials.length) newIndex = 0

		this.setState((prevState) => ({
			testimonials: prevState.testimonials,
			currentIndex: newIndex
		}))
	}

	render() {
		let name = this.state.testimonials[this.state.currentIndex].name
		let position = this.state.testimonials[this.state.currentIndex].position
		let image = this.state.testimonials[this.state.currentIndex].image
		let cite = this.state.testimonials[this.state.currentIndex].cite

		return (
			<div className="slider">
				<div className="slider__picture">
					<img src={image} alt={`"${name}"`} />

					<div className="buttons">
						<button id="buttonPrev" className="button" onClick={this.goPrev}>&nbsp;</button>
						<button id="buttonNext" className="button" onClick={this.goNext}>&nbsp;</button>
					</div>
				</div>
				
				<div className="slider__text">
					<p className="cite__text">“ {cite} ”</p>

					<div className="author__info">
						<p className="cite__author">{name}</p>
						<p className="author__position">{position}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Slider