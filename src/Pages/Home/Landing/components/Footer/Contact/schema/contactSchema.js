import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({

	name : Yup.string()
		.required('is Required!'),

	age : Yup.number()
		.required('is Required!'),

	gender : Yup.string()
		.required('is Required!'),

	queries : Yup.string()
		.required('is Required!'),

	mobile : Yup.number()
		.required('is Required!'),

	email : Yup.string()
		.email('Invalid!')
		.required('is Required!')

})

export const contactInitial = ({
	name : '',
	age : '',
	gender : 'others',
	queries : '',
	mobile : '',
	email : '',
})