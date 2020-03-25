import React from 'react'

import './NavMenu.css'

//routing
import { Link } from 'react-router-dom'

//icons

const NavMenu = (props) => {

	return (
		<div className="main--header--mobile--menu--container">
			<div className="main--header--mobile--menu">
				<ul
					onClick = {(e) => { props.changeClass(); props.setMenu(false)}}
				>
					<a href="#about"><li>About</li></a>
					<a href="#patient"><li>For Patient</li></a>
					<a href="#dentist"><li>For Dentist</li></a>
					<a href="#physiotherapy"><li>Physiotherapy</li></a>
					<a href="#contact"><li>Contact</li></a>
				</ul>
			</div>
			{props.loggedIn ?  (
				<div className="main--header--mobile--menu--button--container">
					<button>
						LOGOUT
					</button>
					<p>eKatalyst 2020</p>
				</div>
			) : ( null )}
			
		</div>
	)

}

export default NavMenu