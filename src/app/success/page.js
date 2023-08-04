import Image from 'next/image'
import Link from 'next/link'
import './success.css'

export default function Page(){
	return(
		<>
		<div className='success-banner-container'>
			<div className='success-outer'>
				<div className='success-buffer'></div>
				<div className='success-text'>Success!</div>
				<div className='success-text2'>You can now access the members-only section by logging in with raven and inputting your crsid</div>
				<div className='success-buffer2'></div>
			</div>
		</div>
		</>
	)
}