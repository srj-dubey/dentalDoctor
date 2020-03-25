import React from 'react'
import { useState } from 'react'
import './HeaderMobile.css'

//routing
import { Link } from 'react-router-dom'

//components
import NavButton from './components/NavButton/NavButton.js'
import NavMenu from './components/NavMenu/NavMenu.js'

const HeaderMobile = (props) => {

	const [menu, setMenu] = useState(false)

	const changeClass = () => {

		let hamburger = document.querySelector(".hamburger")
		let nav = document.querySelector(".main--header--mobile--menu--container")
		// On click
		setMenu(!menu)

		hamburger.classList.toggle("is-active")

		// nav.classList.toggle("is--open")

	
	}

    return (
		<div className="main--header--mobile--wrap">
			<div className="main--header--mobile">
				<div className="main--header--mobile--logo">
					<Link to='/'>
						<h1>CASADENT</h1>
					</Link>
				</div>
				<NavButton
					menu = {menu}
					setMenu = {setMenu}
					changeClass = {changeClass}
					loggedIn = {props.loggedIn}
				/>
			</div>
			{(menu === true) ? (
				<div className="main--header--mobile--menu--wrap">
					<NavMenu
							loggedIn = {props.loggedIn}
							setMenu = {setMenu}
							changeClass = {changeClass}
					/>
				</div>
			) : (null)}
			
		</div>
			
    )
}

export default HeaderMobile
