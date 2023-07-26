import Image from 'next/image'
import Link from 'next/link'
import './members.css'

export default function Page(){

	return(
		<>
			<div className='members-banner-container'>
				<div className='members-outer'>
					<div className='members-header-container'>
						<p>MEMBERS AREA</p>
					</div>
					<div className='thinLine'></div>
					<div className='members-minor-container'>
						<p>
							Sign up to Cambridge Investment Banking Society (CIBS) for access to our newsletters, events, and initiatives by filling in the form below! Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}