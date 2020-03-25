import React from 'react'
import { useState } from 'react'

import './Treatment.css'

const TreatmentBox = (props) => {
	
	return (
		<div className="home--landing--treatment--treatmentBox">
			<div className="home--landing--treatment--treatmentBox--image--container">
				<img  src={props.data.media} alt={props.data.heading} />
			</div>
			<div className="home--landing--treatment--treatmentBox--content--container">
				<h6>
					{props.data.heading}
				</h6>		
				<p>
					{props.data.info}
				</p>
			</div>
		</div>
	)

}

export default TreatmentBox