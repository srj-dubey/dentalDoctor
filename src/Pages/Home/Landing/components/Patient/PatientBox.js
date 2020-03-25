import React from 'react'
import { useState } from 'react'

import './Patient.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faBook, faRocket } from '@fortawesome/free-solid-svg-icons'

//media

//components

const PatientBox = (props) => {
	
	return (
		<div className="">
			<div className="home--landing--patient--box">
					<div className="home--landing--patient--box--heading">
						<FontAwesomeIcon
							icon={props.data.icon}
							className="home--landing--patient--box--heading--icon"
						/>					
						<h2>
							{props.data.heading}
						</h2>
					</div>
					<div className="home--landing--patient--box--content">
						<p>
							{props.data.content}
						</p>
					</div>
				</div>
		</div>
	)

}

export default PatientBox