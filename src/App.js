
import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';

//redux
import { Provider } from "react-redux"
import store from "./store.js"

//routing
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

//components
import Header from './ToolBox/Header/Header.js'
import Loading from './ToolBox/Loading/Loading.js'

// Dynamic Imports 
const Home = React.lazy(() => import('./Pages/Home/Home.js'))
// const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard.js'))
// const Login= React.lazy(() => import('./Pages/Login/Login.js'))
// const Register = React.lazy(() => import('./Pages/Register/Register.js'))
// const SubProfileRegister = React.lazy(() => import('./Pages/SubProfile/SubProfileRegister/SubProfileRegister.js'))
// const SubProfilePreview = React.lazy(() => import('./Pages/SubProfile/SubProfilePreview/SubProfilePreview.js'))
// const Nexus = React.lazy(() => import('./Pages/Nexus/Nexus.js'))
// const About = React.lazy(() => import('./Pages/Static/About/About.js'))
// const News = React.lazy(() => import('./Pages/Static/News/News.js'))
// const Carrers = React.lazy(() => import('./Pages/Static/Carrers/Carrers.js'))

function App() {
	
	return (
		<Provider store={ store }>
			<Router basename={process.env.PUBLIC_URL}>
				{/* constant */}
				<Header />
				{/* variable paths */}
				<Suspense fallback={<Loading />}>
					{/* static routes */}
					{/* <Route exact path='/about' component={About} /> */}
					{/* <Route exact path='/news' component={News} /> */}
					{/* <Route exact path='/carrers' component={Carrers} /> */}
					{/* dynamic routes */}
					<Route exact path='/' component={Home} />
					{/* <Route exact path='/nexus' component={Nexus} /> */}
					{/* <Route path="/dashboard" component={Dashboard} />  */}
					{/* <Route exact path='/login' component={Login} /> */}
					{/* <Route exact path='/register' component={Register} /> */}
					{/* temp routes: only for dev */}
					<Route exact path='/loading' component={Loading} />
					{/* not confirmed routes: to be shifted */}
					{/* <Route path='/sub-profile/register' component={SubProfileRegister} /> */}
					{/* <Route path='/sub-profile/view/:type' component={SubProfilePreview} /> */}
				</Suspense>
			</Router>
		</ Provider>
    )
}

export default App
