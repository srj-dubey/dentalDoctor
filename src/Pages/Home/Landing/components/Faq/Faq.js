import React from 'react'
import './Faq.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//media

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//components
import FaqBox from './FaqBox/FaqBox.js'

//resources
import { faqs } from './faqList.js'

function Faq() {	
	
	return (

		<div class='about--faq--container'>
			<div className="about--faq--head">
				<h2>FAQ's</h2>
			</div>
			<div className="about--faq--faqBox--wrap">
				{faqs.map((faq, index) => {
					return (
						<FaqBox 
							key={index}
							head = {faq.head}
							content = {faq.content} 
						/>
					)
				})}
			</div>
		</div>

	)	
}

export default Faq

