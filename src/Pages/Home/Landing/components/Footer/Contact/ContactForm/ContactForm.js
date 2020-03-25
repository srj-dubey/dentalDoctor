import React from 'react'
import { useState } from 'react'

import './ContactForm.css'

//icons

//media

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik'

//redux
import { useDispatch } from 'react-redux'

//components
import FormField from '../../../../../../../ToolBox/FormField/FormField.js'

//form
import { contactSchema, contactInitial } from '../schema/contactSchema.js'

//api
import { sendEmail } from '../../../../../../../Actions/email/email.js'

const ContactForm = (props) => {

	const dispatch = useDispatch()
	const [genderOption, setGenderOption] = useState(null)

	const handleGender = (e) => {
		if(e.target.value != '') {
			setGenderOption(e.target.value)
		}
	}

	return (
		<div className="contact--contactForm">
			<Formik
				initialValues={contactInitial}
				validationSchema={contactSchema}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(sendEmail(values))
					setSubmitting(false)
				}}
			>
			{({ isSubmitting, values, errors }) => (
				<Form className='form'>
					<div className="contact--contactForm--form--inputBox--conatiner">
						<FormField
							label='Name'
							name='name'
							type='text'
							errorClass='form--error'
							fieldClass='form--field'
							placeholder='Enter your Name...'
						/>
					</div>
					<div className="contact--contactForm--form--inputBox--conatiner">
						<FormField
							label='Age'
							name='age'
							type='text'
							errorClass='form--error'
							fieldClass='form--field'
							placeholder='Enter your Age...'
						/>
					</div>
					<div className="contact--contactForm--form--inputBox--select--conatiner">
						<span className="contact--contactForm--form--inputBox--select--label">
							Gender
						</span>
						<select name="gender" onChange={e => handleGender(e)}>
							<option value={''}>Please select your gender</option>
							<option value={'male'}>Male</option>
							<option value={'female'}>Female</option>
							<option value={'others'}>Others</option>
						</select>
					</div>
					<div className="contact--contactForm--form--inputBox--conatiner">
						<FormField
							label='Queries'
							name='queries'
							component = 'textarea'
							type='text'
							errorClass='form--error'
							fieldClass='contact--contactForm--form--field form--field'
							placeholder='Enter your Queries...'
						/>
					</div>
					<div className="contact--contactForm--form--inputBox--conatiner">
						<FormField
							label='Mobile'
							name='mobile'
							type='text'
							errorClass='form--error'
							fieldClass='form--field'
							placeholder='Enter your Mobile...'
						/>
					</div>
					<div className="contact--contactForm--form--inputBox--conatiner">
						<FormField
							label='Email'
							name='email'
							type='email'
							errorClass='form--error'
							fieldClass='form--field'
							placeholder='Enter your Email...'
						/>
					</div>
					<div className="contact--contactForm--form--button--container">
						<button
							className="form--button"
							onClick={e => {
								
							}}
						>
							SUBMIT
						</button>
					</div>
				</Form>
			)}
			</Formik>
		</div>
	)

}

export default ContactForm