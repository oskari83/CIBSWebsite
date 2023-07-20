'use client'

import '../app/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import img from '../../resources/Logo_Icon.png'

export default function Navbar() {
	const router = useRouter()

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
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>What we do</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>Sponsors</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>Research Group</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/join')}>
						<p>Join us</p>
					</div>
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>Members</p>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}