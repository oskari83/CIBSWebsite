import Image from 'next/image'
import Link from 'next/link'
import './events.css'
import EventsList from '@/components/eventslist'

export default function Page(){
	return(
		<>
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