'use client'

import './membersarea.css'
import { useRouter } from 'next/navigation'

export default function JoinButton3() {
	const router = useRouter()

	return (
		<>
			<div className='raven-take-to-join-button' onClick={() => router.push('/join')}>Join Us</div>
		</>
	)
}