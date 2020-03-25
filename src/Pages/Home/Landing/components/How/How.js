import React from 'react'
import { useState } from 'react'

import './How.css'

import MediaQuery from "react-responsive"

//icons

//components
import HowTimelineDesk from './HowTimelineDesk.js'
import HowTimelineMobile from './HowTimelineMobile.js'

//media

const How = (props) => {

	return (
		<div className="home--landing--how--container">
			<div className="home--landing--how--heading--container">
				<div className="home--landing--how--heading">
					<h1>How It Works?</h1>
				</div>
			</div>
			<div className="home--landing--how">
				<MediaQuery query='(min-width: 1024px)' >
					<HowTimelineDesk />
				</MediaQuery>
				<MediaQuery query='(max-width: 1023px)' >
					<HowTimelineMobile />
				</MediaQuery>
			</div>
		</div>
	)

}
export default How