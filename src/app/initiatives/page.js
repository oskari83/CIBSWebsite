import Image from 'next/image'
import Link from 'next/link'
import './initiatives.css'

import event2_img from '../../../resources/events2.jpg';
import event4_img from '../../../resources/events4.jpg';

import event1_img from '../../../resources/events1.jpg';
import event3_img from '../../../resources/events3.jpg';
import event6_img from '../../../resources/events6.jpg';

import JoinButton2 from '@/components/joinbutton2';


export default function Page(){
	return(
		<>
		<div className='initiatives-banner-container'>
			<div className='initiativespage-outer'>
				<div className='initiativespage-header-container'>
					<p>INITIATIVES & EVENTS</p>
				</div>
				<div className='thinLine'></div>
				<div className='initiatives-boxes-outer-container'>

					<div className='initiatives-box-container'>
						<div className='initiatives-box-container-header'>
							ALUMNI NETWORK
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Develops connections between students and alumni in industry</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Senior speaker series with up to MD-level Cambridge alumni, providing high-level industry and sector insights</li>
							</div>
						
						</div>
					</div>

					<div className='initiatives-box-container-image'>
						<Image
							src={event2_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="initiatives1 pic"
						/>
					</div>

					<div className='initiatives-box-container2'>
						<div className='initiatives-box-container-header2'>
							DIVERSITY AND INCLUSION
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Diverse members with 57.8% from BAME communities</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Championing diversity and inclusion through events such as BAME socials, and LGBTQ+ in Finance panels</li>
							</div>
						
						</div>
					</div>

					<div className='initiatives-box-container'>
						<div className='initiatives-box-container-header'>
							MEMBER-EXCLUSIVE GUIDES
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Guides for application processes</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Updated spreadsheet of sponsor opportunities such as internships and webinars</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Basic technical guides such as valuation methods</li>
							</div>
						
						</div>
					</div>

					<div className='initiatives-box-container-image'>
						<Image
							src={event4_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="initiatives2 pic"
						/>
					</div>

					<div className='initiatives-box-container2'>
						<div className='initiatives-box-container-header2'>
							RESEARCH GROUP
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Publication of 3 articles per week, with topics ranging from M&A analysis to macroeconomic news</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Research Group Analysts' skills developed through workshops and training</li>
							</div>
						
						</div>
					</div>

					<div className='initiatives-box-container2'>
						<div className='initiatives-box-container-header2'>
							MENTORSHIP SCHEME
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Largest in Cambridge with 83 mentees</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Increases member competitiveness with application advice</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Valuable relationships with seniors and alumni</li>
							</div>
						</div>
					</div>

					<div className='initiatives-box-container'>
						<div className='initiatives-box-container-header'>
							EMAIL ROUNDUPS
						</div>

						<div className='initiatives-box-container-text'>
							<div className='initiatives-box-container-text-list'>
								<li>Fortnightly newsletter with updates on events, opportunities and programmes</li>
							</div>
							<div className='initiatives-box-container-text-list'>
								<li>Consistently high engagement rates with 65% open rate</li>
							</div>
						
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className='fourth-banner-container'>
			<div className='events-outer'>
				<div className='events-container'>
					<div className='events-image-container'>
						<Image
							src={event1_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="initiatives pic"
						/>
					</div>
					<div className='events-text-container-outer'>
						<div className='events-header-container'>
							<p>CAREER GUIDANCE</p>
						</div>
						<div className='events-detail-container'>
							Previous successful applicants share their experience of programmes across wide variety of divisions
						</div>
						<div className='events-detail-container'>
							Provide members a comprehensive understanding of recruitment process, tips and tricks
						</div>
						<div className='events-detail-container'>
							CV and cover letter workshops
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<div className='third-banner-container'>
			<div className='events-outer'>
				<div className='initiatives-container'>
					<div className='initiatives-text-container-outer'>
						<div className='initiatives-header-container'>
							<p>NETWORKING EVENTS</p>
						</div>
						<div className='initiatives-detail-container'>
							Members build relationships with firm representatives, getting to know the firm culture and open opportunities
						</div>
						<div className='initiatives-detail-container'>
							Strong networks across the membership base, where members support each other in application processes
						</div>
						
					</div>
					<div className='initiatives-image-container'>
						<Image
							src={event3_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="initiatives pic"
						/>
					</div>
				</div>
			</div>
		</div>

		<div className='fourth-banner-container'>
			<div className='events-outer'>
				<div className='events-container'>
					<div className='events-image-container'>
						<Image
							src={event6_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="initiatives pic"
						/>
					</div>
					<div className='events-text-container-outer'>
						<div className='events-header-container'>
							<p>INDUSTRY INSIGHTS</p>
						</div>
						<div className='events-detail-container'>
							Technical workshops, insight talks and panels, explaining trends in finance
						</div>
						<div className='events-detail-container'>
							Platform for firms to demonstrate thought leadership and share unique insights
						</div>
						<div className='events-detail-container'>
							Introduce students to non-mainstream divisions in finance
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<div className='joining-end-banner-container'>
			<div className='joining-end-outer'>
				<div className='joining-end-text-outer'>
					<p>Sign up to Cambridge Investment Banking Society now</p>
				</div>
				<div className='joining-end-text-minor'>
					<p>Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge</p>
				</div>
				<JoinButton2></JoinButton2>
			</div>
		</div>

		</>
	)
}