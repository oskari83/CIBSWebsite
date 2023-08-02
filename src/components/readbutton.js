'use client'

import './eventslist.css'
import { useRouter } from 'next/navigation'

export default function ReadButton({stringUrl}) {
	const router = useRouter()

	return (
		<>
		<div className='events-box-text-button-container' onClick={() => router.push(`/researchgroup/${stringUrl}`)}>
			Read
		</div>
		</>
	)
}