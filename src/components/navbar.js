'use client'

import '../app/globals.css'
import './navbar.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import img from '../../resources/Logo_Icon.png'
import key_icon from '../../resources/key.png'
import arrow_icon from '../../resources/down-arrow.png'

import { FiMenu } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5'

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

const NavMenuMobile = ({CloseFunction}) => {
	const router = useRouter();

	const mobileClick = (a) => {
		CloseFunction();
		router.push(a);
	}

    return(
        <div className='nav-mobile'>
            <li className="nav-item" onClick={() => mobileClick('/initiatives')}>
				Initiatives
            </li>
            <li className="nav-item" onClick={() => mobileClick('/events')}>
				Events
            </li>
            <li className="nav-item" onClick={() => mobileClick('/')}>
				Research Group
            </li>
            <li className="nav-item" onClick={() => mobileClick('/members')}>
				Members
            </li>
			<li className="nav-item"onClick={() => mobileClick('/join')}>
				Join Us
            </li>
        </div>
    )
}

export default function Navbar() {
	const router = useRouter();

	const [menuExpand, setMenuExpand] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const hamburgerIcon = <FiMenu size='20px' color='rgb(78, 53, 160)' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
    const closeIcon = <IoCloseSharp size='20px' color='rgb(78, 53, 160)' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>

	const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    }

	const clickResearchGroup = () => {
		document.location.href = "https://cibsoc.co.uk/researchgroup/";
	}

	const clickMenuExpand = () => {
		let curVal = menuExpand;
		setMenuExpand(!curVal);
	}

	const clickLogo = () => {
		closeMobileMenu();
		router.push('/');
	}

	return (
		<>
		<div className='navbar'>
			<div className='navbar-inner'>
				<div className='identity-outer-container' onClick={() => clickLogo()}>
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

				<div className='hamburger'>
					{mobileMenuOpen ? closeIcon : hamburgerIcon}
				</div>

				{mobileMenuOpen && <NavMenuMobile CloseFunction={closeMobileMenu}/>}
				
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