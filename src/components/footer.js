'use client'

import './footer.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import logo2_img from '../../resources/cibs_logo2.png'
import { FacebookIcon, LinkedinIcon, EmailIcon, InstagramIcon } from 'next-share'

export default function Footer() {
	const router = useRouter()

	const clickFacebook = () => {
		window.open("https://www.facebook.com/CIBSoc/", "_blank");
	}

	const clickInstagram = () => {
		window.open("https://www.instagram.com/cibsoc/", "_blank");
	}

	const clickLinkedin = () => {
		window.open("https://www.linkedin.com/company/cibsoc/mycompany/", "_blank");
	}

	const clickEmail = () => {
		window.open("mailto:presidents@cibsoc.co.uk", "_blank");
	}

	const clickResearchGroup = () => {
		document.location.href = "https://cibsoc.co.uk/researchgroup/";
	}

	return (
		<>
		<div className='footer-container'>
			<div className='footer-outer'>
				<div className='footer-above-container'>
					<div className='footer-logo-container' onClick={() => router.push('/')}>
						<div className='footer-logo-image'>
							<Image
								src={logo2_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="logo pic"
							/>
						</div>
					</div>
					<div className='socials-outer-container'>
						<div onClick={clickFacebook} className='socials-button-container'>
							<FacebookIcon size={48} round />
						</div>
						<div onClick={clickInstagram} className='socials-button-container'>
							<InstagramIcon size={48} round />
						</div>
						<div onClick={clickLinkedin} className='socials-button-container'>
							<LinkedinIcon size={48} round />
						</div>
						<div onClick={clickEmail} className='socials-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>
					<div className='footer-links-container'>
						<div className='footer-link' onClick={() => router.push('/events')}>Events</div>
						<div className='footer-link' onClick={() => router.push('/sponsors')}>Sponsorsip</div>
						<div className='footer-link' onClick={() => router.push('/researchgroup')}>Research Group</div>
						<div className='footer-link' onClick={() => router.push('/members')}>Members</div>
					</div>
				</div>
				<div className='footer-line'></div>
				<div className='footer-copyright-outer'>
				<div className='footer-privacy-text'>Privacy Policy</div>
					<div className='footer-copyright-text'>Copyright © 2023 Cambridge Investment Banking Society. All rights reserved.</div>
				</div>
			</div>
		</div>
		</>
	)
}