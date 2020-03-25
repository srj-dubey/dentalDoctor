import React from 'react'
import './FaqBox.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//media

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//components

function FaqBox(props) {	
	
	return (

		<div class='about--faq--faqBox--container'>
			<div className="about--faq--faqBox--head">
				<h3>{props.head}</h3>
			</div>
			<div className="about--faq--faqBox--content">
				<p>
					{props.content}
				</p>
			</div>
		</div>

	)	
}

export default FaqBox

