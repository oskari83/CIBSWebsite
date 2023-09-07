'use client'
import './socialMediaButtons.css'

import { FacebookIcon, LinkedinIcon, EmailIcon, InstagramIcon } from 'next-share'

export default function SocialMediaButtons() {

	const clickFacebook = () => {
		window.open("https://www.facebook.com/CIBSoc/", "_blank");
	}

	const clickInstagram = () => {
		window.open("https://www.instagram.com/cibsoc/", "_blank");
	}

	const clickLinkedin = () => {
		window.open("https://www.linkedin.com/company/cibsoc/mycompany/", "_blank");
	}

	return (
		<>
		<div className='socials-outer-container2'>
			<div onClick={clickFacebook} className='socials-button-container2'>
				<FacebookIcon size={48} round />
			</div>
			<div onClick={clickInstagram} className='socials-button-container2'>
				<InstagramIcon size={48} round />
			</div>
			<div onClick={clickLinkedin} className='socials-button-container2'>
				<LinkedinIcon size={48} round />
			</div>
		</div>
		</>
	)
}