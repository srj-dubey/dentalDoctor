import React from 'react'
import { useState } from 'react'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

import './Testimonial.css'

//components
import TestimonialBox from './TestimonialBox.js'

//resources
import { testimonialList } from './testimonialList.js'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Testimonial = (props) => {

	const testimonial = testimonialList.map((value, index) => {
		return (
			<div className="home--landing--treatment--slider--container home--landing--testimonial--slider--container">
				<TestimonialBox 
					data={value} 
					key={index}
				/>	
			</div>
		)
	})

	return (
		<div className="home--landing--testimonial--container">
			<div className="home--landing--treatment--heading--container">
				<div className="home--landing--treatment--heading">
					<h1>Testimonials</h1>
				</div>
			</div>
			<div className="home--landing--treatment">
				<AutoplaySlider
					play={true}
					cancelOnInteraction={false} // should stop playing on user interaction
					interval={3000}
					className="home--landing--treatment--slider home--landing--testimonial--slider"
				>
					{testimonial}
				</AutoplaySlider>
			</div>
		</div>
	)

}

export default Testimonial