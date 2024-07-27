import Image from 'next/image'
import Link from 'next/link'
import './join.css'
import JoinForm from '@/components/joinform'

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
					<p>Sign Up to CIBS</p>
				</div>
			</div>
		</div>

		<div className='join-banner-container'>
			<div className='join-outer'>
				<div className='join-header-container'>
					<p>JOIN US</p>
				</div>
				<div className='thinLine'></div>
				<div className='join-minor-container'>
					<p>
						Sign up to Cambridge Investment Banking Society (CIBS) for access to our newsletters, events, and initiatives by filling in the form below! Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge.
					</p>
					<p className='join-minor-text'>
						Please give both a Cambridge and a non-Cambridge email address.
					</p>
				</div>
				<JoinForm></JoinForm>
			</div>
		</div>
		</>
	)
}