import React, { useState } from 'react'
import './OurAbout.css'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//media
import img1 from '../../../../../assets/temp/c3.png'

// icons

//components

function OurAbout() {	

	const [about, setAbout] = useState('offering')

	return (

		<div class='home--landing--ourAbout'>
			<div className='home--landing--ourAbout--image'>
				<img src={img1} alt={'Ekatalyst'} />
			</div>
			<div className="home--landing--ourAbout--main">
				<div className="home--landing--ourAbout--button--container">
						{(about === 'offering') ? (
							<div>
								<button 
									className="home--landing--ourAbout--button--active"
									onClick={(e) => { setAbout('offering')}}
								>
									Our Offering
								</button>
								<button 
									className="home--landing--ourAbout--button"
									onClick={(e) => { setAbout('specialities')}}
								>
									Our Specialities
								</button>
							</div>
						) : (
							<div>
								<button 
									className="home--landing--ourAbout--button"
									onClick={(e) => { setAbout('offering')}}
								>
									Our Offering
								</button>
								<button 
									className="home--landing--ourAbout--button--active"
									onClick={(e) => { setAbout('specialities')}}
								>
									Our Specialities
								</button>
							</div>
						)}
				</div>
				<div className="home--landing--ourAbout--content">
					<div>
					{(about === 'offering') ? (
						<p>
							Deriving its root from the Spanish word 'casa', which means house or home, we provide you with the dental solutions at your own home. Through a single click, you will be connected to a network of professionals who strive to provide you with the most affordable dentistry solutions available in this age.
						</p>
					) : (
						<p>
							With our unique initiative to introduce home dental care services, even complex procedures such as surgical removal of teeth, root canal treatment , denture fabrication , scaling and polishing , permanent restoration and fixed crown and bridge prosthesis , can be performed in the comfort of your home. Special needs dentistry and preventive oral healthcare is our forte.
						</p>
					) }
						
					</div>
				</div>
			</div>
		</div>

	)	

}

export default OurAbout

