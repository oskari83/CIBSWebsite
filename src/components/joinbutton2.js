'use client'

import '../app/globals.css'
import { useRouter } from 'next/navigation'

export default function JoinButton2() {
	const router = useRouter()

	return (
		<>
		<div className='joining-end-button-outer'>
			<div className='joining-end-join-button' onClick={() => router.push('/join')}>
				<div className='joining-end-button-text'>JOIN US</div>
			</div>
		</div>
		</>
	)
}