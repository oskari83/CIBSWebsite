import Image from 'next/image'
import Link from 'next/link'
import './researchgroup.css'
import '../../components/eventslist.css'

import r1_img from '../../../public/resources/researchgroup/r1.png'
import r2_img from '../../../public/resources/researchgroup/r2.png'
import r3_img from '../../../public/resources/researchgroup/r3.png'

import ReadButton from '@/components/readbutton'
import ApplyLink from '@/components/appLink'
import EmailLink from '@/components/emailLink'

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
					CIBS Research Group is a subdivision of the Cambridge Investment Banking Society dedicated to running an analyst programme that gives an invaluable opportunity to conduct sector research (in Michaelmas Term) and propose a M&A transaction (in Lent Term).
				</div>

				<div className='research-message-container'>
					This year, the CIBS Research group will write research reports on the following sectors: Technology, Media, & Telecom, Consumer & Retail, Industrials, Natural Resources, Healthcare, FIG & FinTech,
					 Real Estate, and Business Services. Each sector will be covered by a team of 4 to 5 students — 1 Coverage Head and 3-4 Research Analysts.
				</div>

				<div className='research-message-container'>
					As part of the programme, analysts will be invited to exclusive training sessions conducted by CIBS members with internship experience at investment banking/private equity firms, with sessions including:
				</div>

				<div className='research-message-container'>
					<li>Value companies using a DCF analysis</li>
					<li>Build a meaningful set of trading and transaction comps, and </li>
					<li>Analyse M&A transactions with accretion/dilution models</li>
				</div>

				<ApplyLink />

				<div className='research-message-container'>
					Deadline: September 15th
				</div>

				<div className='research-message-container'>
					In past years, the Research Group has written about all topics related to commercial awareness, covering categories from M&A transactions to capital 
					 market trends to macroeconomic news and more.
				</div>

				<div className='research-message-container'></div>
				<div className='research-message-container'></div>
				<div className='research-message-container'></div>
			</div>
		</div>

		<div className='packages-banner-container'>
			<div className='packages-banner-outer'>
				<div className='sponsorspage-packages-header-container'>
					<p>CONTACT US</p>
				</div>
				<div className='thinLine'></div>

				<div className='sponsorspage-minor-container-highlighted'>
					<p>
						If you have any questions, contact us at:
					</p>
					<EmailLink emailText={"researchgroup@cibsoc.co.uk"}/>
				</div>
			</div>
		</div>

		<div className='research-banner-container'>
			<div className='research-outer'>
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