import React from 'react'
import { useState } from 'react'

import './Dentist.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faBook, faRocket } from '@fortawesome/free-solid-svg-icons'

//media

//components
import DentistBox from './DentistBox.js'

//resources
import { dentistList } from './dentistList.js'

const Dentist = (props) => {

	const dentist = dentistList.map((value, index) => {
		return (
			<DentistBox
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
						For Dentist
					</h1>
				</div>
			</div>
			<div className="home--landing--patient">
				{/* first */}
				{dentist}
			</div>
		</div>
	)

}
export default Dentist