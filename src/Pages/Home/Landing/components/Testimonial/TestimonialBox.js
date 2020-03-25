import React from 'react'
import { useState } from 'react'

import './Testimonial.css'
import './TestimonialBox.css'

const TestimonialBox = (props) => {
	
	return (
		<div className="home--landing--testimonial--testimonialBox">
			{/* <div className="home--landing--treatment--treatmentBox--image--container">
				<img  src={props.data.media} alt={props.data.heading} />
			</div> */}
			<div className="home--landing--testimonial--testimonialBox--content--container">
				<p>
					{props.data.message}
				</p>
				<h6>
					{props.data.name}
				</h6>		
			</div>
		</div>
	)

}

export default TestimonialBox