import Image from 'next/image'
import './ourteam.css'

import CommitteeBoxes from '@/components/committeeBoxes'

import cibsBackground_img from '../../../public/resources/kingscollege3.jpg'

export default function Page() {

	return (
		<>
			<div className='small-top-banner-container'>
				<Image
					src={cibsBackground_img}
					style={{ objectFit: 'cover' }}
					fill={true}
					alt="background image"
					priority
				/>
				<div className='small-top-outer'>
					<div className='small-top-banner-text-outer'>
						<p>Committee</p>
					</div>
				</div>
			</div>

			<div className='fifth-banner-container'>
				<div className='committee-outer'>
					<div className='committee-header-container'>
						<p>COMMITTEE</p>
					</div>
					<div className='thinLine'></div>
					<div className='committee-message-container'>
						<div className='committee-message-container-header'>A warm welcome from our committee!</div>
						<div className='space-10px'></div>
						<p>Welcome to CIBS! We are so excited to lead Cambridge Investment Banking Society this year. We aim to connect Cambridge students with opportunities within the financial services industry and help equip them with the skills necessary to succeed within finance. Make sure to join us and we look forward to seeing you at our events!</p>
						<div className='space-10px'></div>
						<p className='committee-text-right-pos'>Prarthana Arora</p>
						<p className='committee-text-right-pos'>CIBS President 2026-27</p>
					</div>

					<CommitteeBoxes />
				</div>
			</div>
		</>
	)
}