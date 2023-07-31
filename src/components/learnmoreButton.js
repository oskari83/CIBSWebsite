'use client'

import '../app/globals.css'
import { useRouter } from 'next/navigation'

export default function LearnMoreButton() {
	const router = useRouter()

	return (
		<>
		<div className='events-button-outer'>
			<div className='events-button-container' onClick={() => router.push('/initiatives')}>
				<p>Learn more</p>
			</div>
		</div>
		</>
	)
}