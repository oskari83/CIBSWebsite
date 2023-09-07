'use client'

import './emailLink.css'

export default function EmailLink() {

	const clickEmail = () => {
		window.open("mailto:sponsorship@cibsoc.co.uk", "_blank");
	}

	return (
		<>
		<p className='email-text-bold' onClick={clickEmail}>
			sponsorship@cibsoc.co.uk
		</p>
		</>
	)
}