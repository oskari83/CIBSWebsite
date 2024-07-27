import Image from 'next/image'
import Link from 'next/link'
import './events.css'
import EventsList from '@/components/eventslist'

import cibsBackground_img from '../../../public/resources/kingscollege3.jpg'

export default function Page(){
	return(
		<>
		<div className='small-top-banner-container'>
			<Image
				src={cibsBackground_img}
				style={{objectFit: 'cover'}}
				fill={true}
				alt="background image"
				priority
			/>
			<div className='small-top-outer'>
				<div className='small-top-banner-text-outer'>
					<p>Our Events</p>
				</div>
			</div>
		</div>

		<div className='eventspage-banner-container'>
			<div className='eventspage-outer'>
				<div className='eventspage-header-container'>
					<p>EVENTS</p>
				</div>
				<div className='events-thinLine'></div>

				<EventsList></EventsList>
			</div>
		</div>
		</>
	)
}