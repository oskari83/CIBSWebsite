import Image from 'next/image'
import Link from 'next/link'
import './sponsors.css'

export default function Page(){
	return(
		<>
		<div className='sponsorspage-banner-container'>
			<div className='sponsorspage-outer'>
				<div className='sponsorspage-header-container'>
					<p>SPONSORS</p>
				</div>
				<div className='thinLine'></div>
				<div className='sponsorspage-minor-container'>
					<p>
						Sign up to Cambridge Investment Banking Society (CIBS) for access to our newsletters, events, and initiatives by filling in the form below! Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge.
					</p>
				</div>
			</div>
		</div>
		</>
	)
}