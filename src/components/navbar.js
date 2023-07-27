'use client'

import '../app/globals.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import img from '../../resources/Logo_Icon.png'
import key_icon from '../../resources/key.png'

export default function Navbar() {
	const router = useRouter()

	const clickResearchGroup = () => {
		document.location.href = "https://cibsoc.co.uk/researchgroup/";
	}

	return (
		<>
		<div className='navbar'>
			<div className='navbar-inner'>
				<div className='identity-outer-container' onClick={() => router.push('/')}>
					<div className='logo-outer-container'>
						<Image
							src={img}
							width={28}
							height={28}
							alt="cibs logo"
						/>
					</div>
					<div className='logo-outer-container'>
					<p className='logotext'>CIBS</p>
					</div>
				</div>
				<div className='navbarlinks-outer-container'>
					<div className='navbar-link' onClick={() => router.push('/events')}>
						<p>Events</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>Sponsors</p>
					</div>
					<div className='navbar-link' onClick={clickResearchGroup}>
						<p>Research Group</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/members')}>
						<div className='icon-container'>
							<Image
								src={key_icon}
								width={10}
								height={10}
								alt="key icon"
							/>
						</div>
						<p>Members</p>
					</div>
					<div className='navbar-link-join' onClick={() => router.push('/join')}>
						<p>Join us</p>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}