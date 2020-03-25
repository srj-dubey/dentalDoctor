import React from 'react'
import './Banner.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//animation
import Particles from 'react-particles-js'

//media
import img1 from '../../../../../assets/banner.png'
// import img13 from '../../../assets/temp/'

// animation
import Typical from 'react-typical'

//components

function Banner() {	

	return (

		<div className="home--landing--banner--container">
			
			<div className="home--landing--banner--virtual">
				<Particles
					width="100%"
					height="100vh"
				/>			
			</div>
			
			<div class='home--landing--banner'>
				<div className='home--landing--banner--main'>
					<div className='home--landing--banner--main--heading'>
						<h1>
							CASADENT  
						</h1>
					</div>
					<div className="home--landing--banner--main--subHeading">
						<Typical
							steps={['Technology Driven Dentistry', 1000, 'Care Driven Dentistry', 500]}
							loop={Infinity}
							wrapper="h2"
						/>
					</div>
					<div className='home--landing--banner--main--form'>
						{/* <input type='text' name={'search'} placeholder={'Search here...'} /> */}
						<a href='#contact'>
							<button>Contact Us</button>
						</a>
					</div>
				</div>

				<div className='home--landing--banner--hero'>
					<img src={img1} alt={'Ekatalyst'} />
				</div>
			</div>

		</div>

	)	
}

export default Banner

