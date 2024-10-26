import axios from 'axios';
import { useState } from 'react';

//  convention is static variables that will not change go outside your function.
//  state variables go inside the function scope
const accessKey = 'f69a0a5b-b333-4982-ae28-2a29c28c9a0c';
const url = 'https://api.web3forms.com/submit';
const initialState = {
	access_key: accessKey,
	subject: 'New Submission from Portfolio Contact Form',
	full_name: '',
	email: '',
	message: ''
}

function ContactForm() {

	// start variable, setter function
	// only use state variables when it needs to effect some kind of html
	const [formData, setFormData] = useState(initialState);
	const [alertMessage, setAlertMessage] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();  // stop it from submitting

		await axios.post(url, formData);

		setAlertMessage('Your message has been received!');

		setTimeout(() => {
			setAlertMessage(''); // once timer runs out, call again
		}, 4500); // message goes away after 4.5 seconds

		setFormData({ ...initialState });
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		// console.log('target', event.target.name);
		// console.log('value', event.target.value);
		setFormData({
			...formData,
			// name dynamically referencing the name prop! that's why it says name
			// value dynamically referencing the value
			[event.target.name]: event.target.value
		});
	}

	return (
		<form onSubmit={handleSubmit} id="contact">
			<h3 className="text-center">Contact Me</h3>

			{/* conditional for if alertMessage should show up */}
			{/* can also use terinary operation */}
			{alertMessage && <p className="message text-center">{alertMessage}</p>}

			{/* need a name prop on each! */}
			<input type="hidden" name="access_key" value={accessKey} />
			<input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />

			{/* name value should match property in the section above */}
			<input onChange={handleInputChange} value={formData.full_name} name="full_name" type="text" placeholder="Enter your full name" required />
			<input onChange={handleInputChange} value={formData.email} name="email" type="text" placeholder="Enter your email address" required />
			<textarea onChange={handleInputChange} value={formData.message} name="message" placeholder="Tell me something" required></textarea>
			<button >Send</button>
		</form>
	)
}

export default ContactForm;