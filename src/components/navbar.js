'use client'

import '../app/globals.css'
import './navbar.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import img from '../../resources/Logo_Icon.png'
import key_icon from '../../resources/key.png'
import arrow_icon from '../../resources/down-arrow.png'

const ExpandedNavBarMenu = () => {
	const router = useRouter();

	return(
		<>
			<div className='navbar-link-expanded-menu'>
				<div className='nav-expanded-menu-item' onClick={() => router.push('/initiatives')}>
					Initiatives
				</div>
				<div className='nav-expanded-menu-item' onClick={() => router.push('/events')}>
					Events Calendar
				</div>
				<div className='nav-expanded-menu-item' onClick={() => router.push('/')}>
					Research Group
				</div>
			</div>
		</>
	)
}

export default function Navbar() {
	const router = useRouter();

	const [menuExpand, setMenuExpand] = useState(false);

	const clickResearchGroup = () => {
		document.location.href = "https://cibsoc.co.uk/researchgroup/";
	}

	const clickMenuExpand = () => {
		let curVal = menuExpand;
		setMenuExpand(!curVal);
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
					<div className='navbar-link-menu' onClick={() => clickMenuExpand()}>
						<p>About Us</p>
						<div className='icon-container2'>
							<Image
								src={arrow_icon}
								width={14}
								height={14}
								alt="arrow icon"
							/>
						</div>
						{menuExpand===true && <ExpandedNavBarMenu />}
					</div>
					<div className='navbar-link' onClick={() => router.push('/sponsors')}>
						<p>Sponsors</p>
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

/*
	<div className='navbar-link' onClick={clickResearchGroup}>
		<p>Research Group</p>
	</div>
*/