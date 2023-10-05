'use client'

import './emailLink.css'

export default function ApplyLink() {

	const clickApply = () => {
		window.open("https://forms.gle/9tv5MKR7H3gRtjcx9", "_blank");
	}

	return (
		<>
			<div className='research-message-container-link' onClick={clickApply}>
				Click here to apply to wave 2 of applications
			</div>
		</>
	)
}