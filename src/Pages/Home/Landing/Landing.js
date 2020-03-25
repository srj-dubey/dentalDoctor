import React from 'react'
import './Landing.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Route } from 'react-router-dom'

//media

//components
import Banner from './components/Banner/Banner.js'
import About  from './components/About/About.js'
import Patient from './components/Patient/Patient.js'
import Treatment from './components/Treatment/Treatment.js'
import How from './components/How/How.js'
import Dentist from './components/Dentist/Dentist.js'
import Faq from './components/Faq/Faq.js'
import Testimonial from './components/Testimonial/Testimonial.js'
import Footer from './components/Footer/Footer.js'

function Landing() {	

	return (
		<div class='home--landing--wrap'>
			<div id="about" className='home--landing--banner--wrap'>
				<Banner />
			</div>
			<div className='home--landing--about--wrap'>
				<About />
			</div>
			<div id="patient" className='home--landing--patient--wrap'>
				<Patient />
			</div>
			<div className='home--landing--treatment--wrap'>
				<Treatment />
			</div>
			<div className='home--landing--how--wrap'>
				<How />
			</div>
			<div id="dentist" className='home--landing--dentist--wrap'>
				<Dentist />
			</div>
			<div id="physiotherapy" className='home--landing--faq--wrap'>
				<Faq/>
			</div>
			<div className='home--landing--testimonial--wrap'>
				<Testimonial />
			</div>
			<div id="contact" className='home--landing--footer--wrap'>
				<Footer />
			</div>
		</div>
	)	
}

export default Landing


