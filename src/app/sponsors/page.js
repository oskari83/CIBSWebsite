import Image from 'next/image'
import Link from 'next/link'
import './sponsors.css'

import hands_img from '../../../resources/hands2.jpg'

export default function Page(){
	return(
		<>
		<div className='sponsorspage-banner-container'>
			<div className='sponsorspage-outer'>
				<div className='sponsorspage-header-container'>
					<p>WHY SPONSOR US</p>
				</div>
				<div className='thinLine'></div>
				<div className='sponsorspage-minor-container'>
					<p>
						Sign up to Cambridge Investment Banking Society (CIBS) for access to our newsletters, events, and initiatives by filling in the form below! Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge.
					</p>
				</div>

				<div className='reasons-sponsor-outer-container'>
					<Image
						src={hands_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="hands pic"
					/>
					<div className='reasons-box-outer-container'>
						<div className='reason-box-outer'>
							<div className='reason-box-header-container2'>
								<p>EFFECTIVE MARKETING</p>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Effective email campaigns with  > 65% open rates"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"3200+ followers accross all social media platforms"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Network of 12 ambassadords, extending word-of-mouth publicity"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Diversified social media content retains followers' engagement"}</li>
							</div>
						</div>

						<div className='reason-box-outer'>
							<div className='reason-box-header-container'>
								SINGLE POINT OF INFORMATION
							</div>
							<div className='reason-box-body-container'>
								<li>{"CIBS is often the first place Cambridge students learn about the finance industry, in a career path where information is crowded and overwhelming"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Among hundreds of finance firms, sponsors leave a lasting impression among our members"}</li>
							</div>
						</div>

						<div className='reason-box-outer2'>
							<div className='reason-box-header-container'>
								HIGH ENGAGEMENT & WIDE AUDIENCE
							</div>
							<div className='reason-box-body-container'>
								<li>{"Consistently oversubscribed events"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"High viewership of Research Group articles"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Strong partnerships with other student organizations worldwide"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Wide and diverse audience across different ethnicities, subjects, and degrees"}</li>
							</div>
						</div>

						<div className='reason-box-outer2'>
							<div className='reason-box-header-container'>
								EFFECTIVE CAREER GUIDANCE
							</div>
							<div className='reason-box-body-container'>
								<li>{"Disaggregated information about finance careers restricts students' ability to make effective decisions"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"Cambridge students feel particularly detached when London is less accessible"}</li>
							</div>
							<div className='reason-box-body-container'>
								<li>{"By bringing firms to members, CIBS provides the most direct career knowledge"}</li>
							</div>
						</div>

						<div className='sponsor-white-box-line'></div>
						<div className='sponsor-white-box-line2'></div>
					</div>
				</div>
			</div>

			<div className='services-banner-container'>
				<div className='services-banner-outer'>

					<div className='sponsorspage-header-container-services'>
						<p>OUR SERVICES</p>
					</div>
					<div className='thinLine'></div>

					<div className='ad-campaign-container'>

						<div className='initiatives-text-container-outer'>
							<div className='initiatives-header-container'>
								<p>ADVERTISING CAMPAIGN</p>
							</div>
							<div className='initiatives-detail-container'>
								From a deep and wide ranging alumni network, member-exclusive guides, mentourship schemes, to email roundups and much more, CIBS supports its members in achieving their dreams and goals.
							</div>
							<div className='initiatives-button-outer'>
								<div className='initiatives-button-container'>
									<p>Learn more</p>
								</div>
							</div>
						</div>
						<div className='initiatives-image-container'>
							
						</div>

					</div>
				</div>
			</div>
		</div>
		</>
	)
}