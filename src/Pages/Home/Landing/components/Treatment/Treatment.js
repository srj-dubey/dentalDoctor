import React from 'react'
import { useState } from 'react'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

import './Treatment.css'

//components
import TreatmentBox from './TreatmentBox.js'

//resources
import { treatmentList } from './treatmentList.js'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Treatment = (props) => {

	const treatment = treatmentList.map((value, index) => {
		return (
			<div className="home--landing--treatment--slider--container">
				<TreatmentBox 
					data={value} 
					key={index}
				/>
			</div>
		)
	})

	return (
		<div className="home--landing--treatment--container">
			<div className="home--landing--treatment--heading--container">
				<div className="home--landing--treatment--heading">
					<h1>Treatments We Offer</h1>
				</div>
			</div>
			<div className="home--landing--treatment">
				<AutoplaySlider
					play={true}
					cancelOnInteraction={false} // should stop playing on user interaction
					interval={3000}
					className="home--landing--treatment--slider"
				>
					{treatment}
				</AutoplaySlider>
			</div>
		</div>
	)

}

export default Treatment