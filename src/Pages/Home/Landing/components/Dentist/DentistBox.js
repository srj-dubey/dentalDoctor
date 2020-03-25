import React from 'react'
import { useState } from 'react'

import './Dentist.css'
import './DentistBox.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faBook, faRocket } from '@fortawesome/free-solid-svg-icons'

//media

//components

const DentistBox = (props) => {
	
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
					<div className="home--landing--patient--box--content home--landing--dentist--box--content">
						<p>
							<ul>
								{props.data.content.map((value, index) => {
									return (
										<li>{value}</li>
									)
								})}
							</ul>
						</p>
					</div>
				</div>
		</div>
	)

}

export default DentistBox