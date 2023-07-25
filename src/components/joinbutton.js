'use client'

import '../app/globals.css'
import { useRouter } from 'next/navigation'

export default function JoinButton() {
	const router = useRouter()

	return (
		<>
		<div className='first-banner-button-outer'>
			<div className='first-banner-join-button' onClick={() => router.push('/join')}>
				<div className='first-banner-button-text'>JOIN US</div>
			</div>
		</div>
		</>
	)
}