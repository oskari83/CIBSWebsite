import Image from 'next/image'
import Link from 'next/link'
import './researchgroup.css'
import '../../components/eventslist.css'

import r1_img from '../../../resources/researchgroup/r1.png'
import r2_img from '../../../resources/researchgroup/r2.png'
import r3_img from '../../../resources/researchgroup/r3.png'

import ReadButton from '@/components/readbutton'

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
					CIBS Research Group is a subdivision of the Cambridge Investment Banking Society dedicated to [providing multifaceted insights into financial markets to CIBS members.]
				</div>

				<div className='research-message-container'>
					The activities of CIBS Research Group include [writing about all topics related to commercial awareness, covering categories from M&A transactions to capital market trends to macroeconomic 
					news and more. Our research analysts collaborate to produce and publish articles on a regular basis. With a strong emphasis on quality and originality, we aim to present unique insights 
					and create genuine value for our readers.]
				</div>

				<div className='research-header-container2'>
					<p>HIGHLIGHTED ARTICLES FROM 2022</p>
				</div>
				<div className='thinLine'></div>

				<div className='research-articles-outer'>
						
					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={r1_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								Spanish Pensions: Ticking Time Bomb?!
							</div>
							<div className='events-box-text-body-container'>
								Recent economic development, Mediterranean diets and abundant sunshine have placed Spain year-on-year in the top spots in quality-of-life indicators, with many of its cities ranked as some of the best places to live by CNBC, including Malága in 2nd place. These factors, plus an internationally praised public healthcare system, means Spain boasts the second highest life expectancy in the world, at 83.5 years of age...
							</div>
							<div className='events-box-text-button-outer-container'>
								<ReadButton stringUrl={'spanish-pensions'} />
							</div>
						</div>
					</div>

					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={r2_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								Reliance Jio leads India’s 5G revolution
							</div>
							<div className='events-box-text-body-container'>
								In September of 2017, India’s government conceived a plan for the foundation of a digital transformation through the power of connectivity across the country. The initiative was titled 5G India 2020, and it served the purpose of pushing for the early deployment of 5G technology in major cities to expand the telecommunications landscape of smart devices. Although the timescale may have been optimistic...
							</div>
							<div className='events-box-text-button-outer-container'>
								<ReadButton stringUrl={'reliance-jio'} />
							</div>
						</div>
					</div>
					
					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={r3_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								Russian Energy Woes
							</div>
							<div className='events-box-text-body-container'>
								The invasion of Ukraine by Russia has shaken the world, with such conflict in Europe being unprecedented in recent history. It is clear the Ukrainian people will bear the brunt of the suffering as their homes are transformed into warzones. This conflict will also bring wider implications for nearly every...
							</div>
							<div className='events-box-text-button-outer-container'>
								<ReadButton stringUrl={'russian-energy-woes'} />
							</div>
						</div>
					</div>
				</div>

				

			</div>
		</div>
		</>
	)
}