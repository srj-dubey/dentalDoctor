import React from 'react'

import './Header.css'

//redux
import { useSelector } from 'react-redux'

//media
import MediaQuery from "react-responsive"

//components
import HeaderDesktop from './components/Desktop/HeaderDesktop.js'
import HeaderMobile from './components/Mobile/HeaderMobile.js'

const Header = () => {

    return (
		<div className="main--header">
			<MediaQuery query='(min-width: 1024px)' >
				<HeaderDesktop loggedIn={false} />
			</MediaQuery>
			<MediaQuery query='(max-width: 1023px)' >
				<HeaderMobile loggedIn={false} />
			</MediaQuery>
		</div>
    )

}

export default Header
