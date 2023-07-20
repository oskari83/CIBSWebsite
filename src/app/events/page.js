import Image from 'next/image'
import Link from 'next/link'
import './events.css'

export default function Page(){
	return(
		<>
		<div className='eventspage-banner-container'>
			<div className='eventspage-outer'>
				<div className='eventspage-header-container'>
					<p>EVENTS AND INITIATIVES</p>
				</div>
				<div className='thinLine'></div>
				<div className='eventspage-minor-container'>
					<p>
						Sign up to Cambridge Investment Banking Society (CIBS) for access to our newsletters, events, and initiatives by filling in the form below! Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge.
					</p>
				</div>
			</div>
		</div>
		</>
	)
}