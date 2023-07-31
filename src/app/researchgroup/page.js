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
					CIBS Research Group is a subdivision of the Cambridge Investment Banking Society dedicated to providing multifaceted insights into financial markets to CIBS members. 
					Given the importance of commercial awareness, both for succeeding in applications for early careers in finance and for becoming an effective finance professional, we at 
					CIBS believe that a specialised research team is hugely beneficial to our members by distilling the most relevant updates in the business world and making information readily accessible.
				</div>

				<div className='research-message-container'>
					The activities of CIBS Research Group include writing about all topics related to commercial awareness, covering categories from M&A transactions to capital market trends to macroeconomic 
					news and more. Our research analysts collaborate to produce and publish articles on a regular basis. With a strong emphasis on quality and originality, we aim to present unique insights 
					and create genuine value for our readers.
				</div>

				<div className='research-header-container2'>
					<p>WHAT WE DO</p>
				</div>
				<div className='thinLine'></div>
				<div className='research-message-container2'>
					Text here...
				</div>
			</div>
		</div>
		</>
	)
}