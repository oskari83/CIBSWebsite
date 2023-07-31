import Image from 'next/image'
import Link from 'next/link'
import './researchgroup.css'


export default function Page(){
	return(
		<>
		<div className='research-banner-container'>
			<div className='research-outer'>
				<div className='research-header-container'>
					<p>RESEARCH GROUP</p>
				</div>
				<div className='thinLine'></div>
				<div className='research-message-container'>
					The Research Group...
				</div>
			</div>
		</div>
		</>
	)
}