import React from 'react'
import { useState } from 'react'

import './HowTimelineMobile.css'

//resources
import { timelineList } from './timelineList.js'

const HowTimelineMobile = (props) => {

	const points = timelineList.map((value, index) => {
		return (
			<Point
				key = {index}
				index = {index}
				content = {value.content}
				pos = {value.pos}
				mobPos = {value.mobPos}
			/>
		)
	})
	
	return (
		<div className="home--landing--how--howTimelineMobile--container">
			<div className="how--howTimelineMobile--bar--container">
				<div className="how--howTimelineMobile--bar">
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
			className="how--howTimelineMobile--bar--data" 
			style={{
				'top': props.mobPos[0],
				'left' : props.mobPos[1]
			}}
		>
			<div className="how--howTimelineMobile--bar--location">
				{/* empty */}
				{/* only for style */}
				</div>
			<div className="how--howTimelineMobile--bar--location--string">
				{/* empty */}
				{/* only for style */}
			</div>
			<div className="how--howTimelineMobile--bar--content">
				<h6>Step {props.index + 1}</h6>
				<p>
					{props.content}
				</p>
			</div>
		</div>
	)
}

export default HowTimelineMobile