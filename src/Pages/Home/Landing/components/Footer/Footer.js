import React from 'react'
import './Footer.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//media

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//media
import img1 from '../../../../../assets/contact.png'

//components
import Contact from './Contact/Contact.js'

function Footer() {	

	return (

		<div className="home--landing--footer">
			<div className="home--landing--footer--box">
				<img src={img1} alt={'Casadent'} />
			</div>
			<div className="home--landing--footer--box">
				<Contact />
			</div>
		</div>

	)	

}

export default Footer
