import React from 'react'
import './App.css'
import Slider from './components/Slider'
import Attribution from './components/Attribution'

function App() {
	const sliderData = [
		{
			name: 'Tanya Sinclair',
			position: 'UX Engineer',
			cite: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
		},
		{
			name: 'John Tarkpor',
			position: 'Junior Front-end Developer',
			cite: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
		}
	]

	return (
		<div className="App">
			<div className="container">
				<Slider data={sliderData} />
			</div>

			<Attribution name="Óscar Miranda" url="https://github.com/oscarmiranda3615" />
		</div>
	);
}

export default App;
