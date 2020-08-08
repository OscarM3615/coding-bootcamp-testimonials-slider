import React from 'react'
import './Attribution.css'

const Attribution = ({ name, url }) => (
	<div className="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
		Coded by <a href={`"${url}"`} target="_blank" rel="noopener noreferrer">{name}</a>.
	</div>
)

export default Attribution
