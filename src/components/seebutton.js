'use client'

import '../app/globals.css'
import { useRouter } from 'next/navigation'

export default function SeeButton({urlString, buttonText}) {
	const router = useRouter()

	return (
		<>
		<div className='wedo-button-container' onClick={() => router.push(urlString)}>
			<p>{buttonText}</p>
		</div>
		</>
	)
}