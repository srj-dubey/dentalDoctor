import React from 'react'

//redux
import { useSelector } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//media

//components
import Landing from './Landing/Landing.js'

function Home() {	

	return (
		<Landing />
	)

}

export default Home

