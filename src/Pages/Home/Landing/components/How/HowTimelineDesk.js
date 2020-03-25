import React from 'react'
import { useState } from 'react'

import './HowTimeline.css'

//resources
import { timelineList } from './timelineList.js'

const HowTimelineDesk = (props) => {

	const points = timelineList.map((value, index) => {
		return (
			<Point
				key = {index}
				index = {index}
				content = {value.content}
				pos = {value.pos}
			/>
		)
	})

	return (
		<div className="home--landing--how--howTimelineDesk--container">
			<div className="how--howTimelineDesk--bar--container">
				<div className="how--howTimelineDesk--bar">
					{/* empty */}
					{/* only for style */}
				</div>
				<div className="how--howTimelineDesk--bar--row">
					{points}
				</div>
			</div>
		</div>
	)

}

const Point = (props) => {
	return (
		<div 
			className="how--howTimelineDesk--bar--data" 
			style={{
				'top': props.pos[0],
				'left' : props.pos[1]
			}}
		>
			<div className="how--howTimelineDesk--bar--location">
				{/* empty */}
				{/* only for style */}
				</div>
			<div className="how--howTimelineDesk--bar--location--string">
				{/* empty */}
				{/* only for style */}
			</div>
			<div className="how--howTimelineDesk--bar--content">
				<h6>Step {props.index + 1}</h6>
				<p>
					{props.content}
				</p>
			</div>
		</div>
	)
}

export default HowTimelineDesk