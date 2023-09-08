'use client'

import './emailLink.css'

export default function EmailLink({emailText}) {

	const clickEmail = () => {
		window.open(`mailto:${emailText}`, "_blank");
	}

	return (
		<>
		<p className='email-text-bold' onClick={clickEmail}>
			{emailText}
		</p>
		</>
	)
}