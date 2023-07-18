import Image from 'next/image'
import Link from 'next/link'
import '.././globals.css'
import img from '../../../resources/Logo_Icon.png'

export default function Page(){
	return(
		<>
		<div className='navbar'>
			<div className='navbar-inner'>
				<div className='identity-outer-container'>
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
					<div className='navbar-link'>
						<p>Home</p>
					</div>
					<div className='navbar-link'>
						<Link href={`/sponsors`}>What we do</Link>
					</div>
					<div className='navbar-link'>
						<p>Sponsors</p>
					</div>
					<div className='navbar-link'>
						<p>Research Group</p>
					</div>
					<div className='navbar-link'>
						<p>Members</p>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}