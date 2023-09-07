'use client'

import './emailLink.css'

export default function ApplyLink() {

	const clickApply = () => {
		window.open("https://forms.gle/YzWHfk28AYY4jqHP6", "_blank");
	}

	return (
		<>
			<div className='research-message-container-link' onClick={clickApply}>
				Click here to Apply for wave 1 applications
			</div>
		</>
	)
}