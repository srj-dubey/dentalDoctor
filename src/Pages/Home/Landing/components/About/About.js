import React from 'react'
import { useState } from 'react'

import './About.css'

//icons

//media
import img1 from '../../../../../assets/dentist.png'
import img2 from '../../../../../assets/dental.png'
import img3 from '../../../../../assets/tooth.png'

//components

const About = (props) => {

	return (
		<div className="home--landing--about--container">
			{/* about 1 */}
			<div className="home--landing--about">
				<div className="home--landing--about--content">
					<div className="home--landing--about--content--heading--container">
						<div className="home--landing--about--content--heading">
							<h2>
								Our
								<span className="home--landing--about--content--heading--highlight">
									Origin
								</span>
							</h2>
						</div>
					</div>
					<p>
						Deriving its root from the Spanish word 'casa', which means 
						house or home, we provide you with the dental solutions at 
						your own home. Through a single click, you will be connected 
						to a network of professionals who strive to provide you with 
						the most affordable dentistry solutions available in this age.
					</p>
				</div>
				<div className="home--landing--about--image">
					<img src={img1} alt="Casadent" />
				</div>
			</div>
			{/* about 2 */}
			<div className="home--landing--about home--landing--about--unique">
				<div className="home--landing--about--image">
					<img src={img2} alt="Casadent" />
				</div>
				<div className="home--landing--about--content">
					<div className="home--landing--about--content--heading--container">
						<div className="home--landing--about--content--heading">
							<h2>
								Our
								<span className="home--landing--about--content--heading--highlight">
									Specialities
								</span>
							</h2>
						</div>
					</div>
					<p>
						With our unique initiative to introduce home dental care services, 
						even complex procedures such as surgical removal of teeth, 
						root canal treatment, denture fabrication, scaling and polishing, 
						permanent restoration and fixed crown and bridge prosthesis, 
						can be performed in the comfort of your home. Special needs 
						dentistry and preventive oral healthcare is our forte.
					</p>
				</div>
			</div>
			{/* about 3 */}
			<div className="home--landing--about">
				<div className="home--landing--about--content">
					<div className="home--landing--about--content--heading--container">
						<div className="home--landing--about--content--heading">
							<h2>
								Our
								<span className="home--landing--about--content--heading--highlight">
									Service
								</span>
							</h2>
						</div>
					</div>
					<p>
						Why go to a clinic and wait for hours when the clinic can come 
						to you? If you are homebound or have difficulty in getting out 
						to dental clinics, we are happy to provide our quality services 
						in the comfort of your home. Committed to making your smile 
						more healthy and beautiful, we at Casadent provide one-stop 
						solution to all of your dental problems and yes that too at your 
						doorstep
					</p>
				</div>
				<div className="home--landing--about--image">
					<img src={img3} alt="Casadent" />
				</div>
			</div>
		</div>
	)

}

export default About