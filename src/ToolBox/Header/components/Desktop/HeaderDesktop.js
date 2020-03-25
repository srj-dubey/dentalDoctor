import React from 'react'
import './HeaderDesktop.css'

import { Link } from 'react-router-dom'

const HeaderDesktop = (props) => {

    return (
		<div className="main--header--desktop">
			<div className='main--header--desktop--logo'>
				<Link to='/'>
					<h1>CASADENT</h1>
				</Link>
			</div>
			<div className='main--header--desktop--menu'>
				<div className='main--header--desktop--menu--nav'>
					<nav>
						<ul>
							<a href="#about"><li>About</li></a>
							<a href="#patient"><li>For Patient</li></a>
							<a href="#dentist"><li>For Dentist</li></a>
							<a href="#physiotherapy"><li>Physiotherapy</li></a>
							<a href="#contact"><li>Contact</li></a>
						</ul>
					</nav>
				</div>
			</div>
		</div>
			
    )
}

export default HeaderDesktop
