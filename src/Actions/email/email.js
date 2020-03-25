
import { SEND_EMAIL } from '../types.js'

//api route

const checkRes = (res) => {
	if(res.msg === '200'){
		alert("Email Sent!")
	}
	if(res.msg === '500') {
		alert("Something Went Wrong!")
	}
}

export const sendEmail = (values) => {
	return dispatch => {
		fetch('https://dental-doctor.herokuapp.com/api/v1/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'email' : values.email,
				'name' : values.name,
				'age' : values.age,
				'gender' : values.queries,
				'mobile' : values.mobile,
			}),
		})
		.then(res => res.json())
		.then(res => checkRes(res))
	}
}