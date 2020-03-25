import React from 'react'
import { useState } from 'react'

import './Contact.css'

//components
import ContactForm from './ContactForm/ContactForm.js'

const Contact = (props) => {

	return (
		<div className="home--landing--contactForm--container">
			<div className="home--landing--contactForm--heading--container">
				<div className="home--landing--contactForm--heading">
					<h2>Contact Us</h2>		
				</div>		
			</div>
			<div className="home--landing--contactForm--form--wrap">
				<ContactForm />
			</div>
		</div>
	)

}

export default Contact