import React from 'react'
import { useState } from 'react'

import './Patient.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faBook, faRocket } from '@fortawesome/free-solid-svg-icons'

//media

//components
import PatientBox from './PatientBox.js'

//resources
import { patientList } from './patientList.js'

const Patient = (props) => {

	const patient = patientList.map((value, index) => {
		return (
			<PatientBox
				key = {value.id}
				data = {value}
			/>
		)
	})

	return (
		<div className="home--landing--patient--container">
			<div className="home--landing--patient--heading--container">
				<div className="home--landing--patient--heading">
					<h1>
						For Patient
					</h1>
				</div>
			</div>
			<div className="home--landing--patient">
				{/* first */}
				{patient}
			</div>
		</div>
	)

}
export default Patient