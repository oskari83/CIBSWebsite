import Image from 'next/image'
import Link from 'next/link'
import './sponsors.css'

import hands_img from '../../../resources/hands2.jpg'

//pics
import sponsor1_img from '../../../resources/sponsorpage/sponsorpage1.png'
import sponsor2_img from '../../../resources/sponsorpage/sponsorpage2.png'
import sponsor3_img from '../../../resources/sponsorpage/sponsorpage3.png'

import events1_img from '../../../resources/events1.jpg'
import events2_img from '../../../resources/events2.jpg'
import events3_img from '../../../resources/events3.jpg'

export default function Page(){
	return(
		<>
		<div className='sponsorspage-banner-container'>
			<div className='sponsorspage-outer'>
				<div className='sponsorspage-header-container'>
					<p>WHY SPONSOR US</p>
				</div>
				<div className='thinLine'></div>

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

					<div className='ad-campaign-container'>

						<div className='sponsorpage-adcampaign-text-container-outer'>
							<div className='sponsorpage-adcampaign-header-container'>
								<p>ADVERTISING CAMPAIGNS</p>
							</div>
							<div className='sponsorpage-adcampaign-detail-container2'>
								In addition to everything else, every sponsor receives at least one advertising campaign, consisting of:
							</div>

							<div className='sponsorpage-adcampaign-text-align-container-outer1'>
								<div className='sponsorpage-eventpartner-text-align-container-outer2'>
									<div className='sponsorpage-ad-campaign-detail-container'>
										<li>{"Advertising across all distribution channels (LinkedIn, Instagram, Facebook, newsletter), totalling over 5000 followers"}</li>
									</div>

									<div className='sponsorpage-ad-campaign-detail-container'>
										<li>{"Ongoing firm opportunities collated and regularly distributed via our Sponsor Opportunities spreadsheet"}</li>
									</div>
								</div>
								<div className='sponsorpage-eventpartner-text-align-container-outer3'>
									<div className='sponsorpage-ad-campaign-detail-container2'>
										<li>{"Strategically timed pre-event marking and post-event recap"}</li>
									</div>

									<div className='sponsorpage-ad-campaign-detail-container2'>
										<li>{"Beautiful graphics designed in-house"}</li>
									</div>

									<div className='sponsorpage-ad-campaign-detail-container2'>
									<li>{"12 ambassadors promote across college and subject networks"}</li>
									</div>
								</div>
							</div>

						</div>
						<div className='sponsorpage-adcampaign-images-outer'>
							<div className='sponsorpage-image-container'>
								<Image
									src={sponsor1_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="sponsorpage1 pic"
								/>
							</div>
							<div className='sponsorpage-image-container'>
								<Image
									src={sponsor2_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="sponsorpage2 pic"
								/>
							</div>
							<div className='sponsorpage-image-container'>
								<Image
									src={sponsor3_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="sponsorpage3 pic"
								/>
							</div>
						</div>
						
					</div>

				</div>
			</div>

			<div className='services-banner-container2'>
				<div className='services-banner-outer2'>
					<div className='event-partnership-container'>

						<div className='sponsorpage-eventpartner-text-container-outer'>
							<div className='sponsorpage-eventpartner-header-container'>
								<p>EVENT PARTNERSHIPS</p>
							</div>
							<div className='sponsorpage-eventpartner-detail-container2'>
								Gold and Platinum sponsors receive our event partnership service, with end-to-end event organisation from us. We have experience hosting events for a variety of firms with various objectives. Examples include:
							</div>

							<div className='sponsorpage-eventpartner-text-align-container-outer1'>
								<div className='sponsorpage-eventpartner-text-align-container-outer2'>
									<div className='sponsorpage-eventpartner-detail-container'>
										<li>{"Coffee chats and dinners, to create real relationships between our members and your firm"}</li>
									</div>

									<div className='sponsorpage-eventpartner-detail-container'>
										<li>{"Workshops, to learn about the industry and skills needed"}</li>
									</div>
								</div>
								<div className='sponsorpage-eventpartner-text-align-container-outer3'>
									<div className='sponsorpage-eventpartner-detail-container'>
										<li>{"Presentations and panel events, to get to know your firm's business and work"}</li>
									</div>

									<div className='sponsorpage-eventpartner-detail-container'>
										<li>{"Networking events, to understand your firm's culture and people"}</li>
									</div>
								</div>
							</div>

							<div className='sponsorpage-eventpartner-detail-container3'>
								We can advise on the best event solution for your objectives, and all events are avenues to directly promote programmes to our members.
							</div>

						</div>

						<div className='sponsorpage-eventpartner-images-outer'>
							<div className='sponsorpage-image-container'>
								<Image
									src={events1_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="events1 pic"
								/>
							</div>
							<div className='sponsorpage-image-container'>
								<Image
									src={events2_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="events2 pic"
								/>
							</div>
							<div className='sponsorpage-image-container'>
								<Image
									src={events3_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="events3 pic"
								/>
							</div>
						</div>
						
					</div>
				</div>
			</div>

			<div className='packages-banner-container'>
				<div className='packages-banner-outer'>
					<div className='sponsorspage-packages-header-container'>
						<p>SPONSORSHIP PACKAGES</p>
					</div>
					<div className='thinLine'></div>

					<div className='sponsor-packages-outer-box'>
						<div className='sponsor-packages-box'>
							<div className='sponsor-packages-box-banner1'></div>
							<div className='sponsor-packages-box-header'>
								Bronze
							</div>
							<div className='sponsor-packages-box-detail'>
								Advertising campaigns:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								1
							</div>
							<div className='sponsor-packages-box-detail'>
								Event partnerships:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								-
							</div>
							<div className='sponsor-packages-box-detail'>
								Firm logo on CIBS merchandise and Social media cover page:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								-
							</div>
						</div>
						<div className='sponsor-packages-box'>
							<div className='sponsor-packages-box-banner2'></div>
							<div className='sponsor-packages-box-header'>
								Silver
							</div>
							<div className='sponsor-packages-box-detail'>
								Advertising campaigns:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								3
							</div>
							<div className='sponsor-packages-box-detail'>
								Event partnerships:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								-
							</div>
							<div className='sponsor-packages-box-detail'>
								Firm logo on CIBS merchandise and Social media cover page:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								-
							</div>
						</div>
						<div className='sponsor-packages-box'>
							<div className='sponsor-packages-box-banner3'></div>
							<div className='sponsor-packages-box-header'>
								Gold
							</div>
							<div className='sponsor-packages-box-detail'>
								Advertising campaigns:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								4
							</div>
							<div className='sponsor-packages-box-detail'>
								Event partnerships:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								1
							</div>
							<div className='sponsor-packages-box-detail'>
								Firm logo on CIBS merchandise and Social media cover page:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								Yes
							</div>
						</div>
						<div className='sponsor-packages-box'>
							<div className='sponsor-packages-box-banner4'></div>
							<div className='sponsor-packages-box-header'>
								Platinum
							</div>
							<div className='sponsor-packages-box-detail'>
								Advertising campaigns:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								6
							</div>
							<div className='sponsor-packages-box-detail'>
								Event partnerships:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								2
							</div>
							<div className='sponsor-packages-box-detail'>
								Firm logo on CIBS merchandise and Social media cover page:
							</div>
							<div className='sponsor-packages-box-detail-number'>
								Yes
							</div>
						</div>
					</div>

					<div className='sponsorspage-minor-container2'>
						<p>
							CIBS would love to partner with you as a sponsor. We hope that our collaboration would allow members of CIBS to learn more about your firm's programs and events, and your firm will be able to reach the many talented students in Cambridge.
						</p>
					</div>

					<div className='sponsorspage-minor-container-highlighted'>
						<p>
							To find out more, please contact us at:
						</p>
						<p className='email-text-bold'>
							sponsorship@cibsoc.co.uk
						</p>
					</div>
				</div>
			</div>

		</div>
		</>
	)
}