import React from 'react'

import  './NavButton.css'

//icons

const NavButton = (props) => {

	return (
		<div className="main--header--mobile--button--container">
			<button 
				className="hamburger hamburger--slider" 
				
				onClick = {(e) => { props.changeClass()}}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
		</div>
	)

}

export default NavButton