import Image from 'next/image'
import Link from 'next/link'
import './sponsors.css'

import hands_img from '../../../resources/hands2.jpg'

//pics
import sponsor1_img from '../../../resources/sponsorpage/adPic1.png'
import sponsor2_img from '../../../resources/sponsorpage/adPic2.png'
import sponsor3_img from '../../../resources/sponsorpage/sponsorpage3.png'

import events1_img from '../../../resources/events1.jpg'
import events2_img from '../../../resources/events2.jpg'
import events3_img from '../../../resources/events3.jpg'

//sponsors photos
import credit_img from '../../../resources/sponsors/creditsuisse.png'
import dragon_img from '../../../resources/sponsors/dragonfly.png'
import flow_img from '../../../resources/sponsors/flowtraders.png'
import houlihan_img from '../../../resources/sponsors/houlihan.png'
import jefferies_img from '../../../resources/sponsors/jefferies.png'
import nomura_img from '../../../resources/sponsors/nomura.png'

export default function Page(){
	return(
		<>
		<div className='sponsorspage-banner-container'>
			<div className='sponsorspage-outer'>
				<div className='sponsorspage-header-container'>
					<p>SERVICES WE OFFER</p>
				</div>
				<div className='thinLine'></div>
				<div className='sponsorspage-minor-container'>
					We offer two primary services to our sponsors, advertising campaigns and event partnerships, however, the committee seeks to cater to the bespoke recruiting needs of our partners.
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
								If you decide to partner with us, the society will promote your firm in several ways.
							</div>

							<div className='sponsorpage-adcampaign-text-align-container-outer1'>
								<div className='sponsorpage-eventpartner-text-align-container-outer2'>
									<div className='sponsorpage-ad-campaign-detail-container'>
										Partners gain advertising visibility across all of our distribution channels (LinkedIn, Instagram, Facebook, newsletter), which together have over 5000 followers. 
										Any ongoing partner firm opportunities are regularly collated and distributed via our Sponsor Opportunities spreadsheet. Moreover, we provide strategically timed pre-event marketing
										and post-event recaps for partner events with beautiful graphics designed in-house, and 12 ambassadors who promote our partners across college and subject networks.
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

					<div className='ad-campaign-container'>

						<div className='sponsorpage-adcampaign-text-container-outer'>
							<div className='sponsorpage-adcampaign-header-container'>
								<p>EVENT PARTNERSHIPS</p>
							</div>
							<div className='sponsorpage-adcampaign-detail-container2'>
								Gold and Platinum sponsors receive our event partnership service, with end-to-end event organisation from us. We have experience hosting events for a variety of firms with various objectives.
							</div>

							<div className='sponsorpage-adcampaign-text-align-container-outer1'>
								<div className='sponsorpage-eventpartner-text-align-container-outer2'>
									<div className='sponsorpage-ad-campaign-detail-container'>
										Examples include: coffee chats and dinners, to create real relationships between our members and your firm; workshops, to learn about the industry and skills needed;
										presentations and panel events, to get to know your firm's business and work; networking events, to understand your firm's culture and people.
									</div>
								</div>
							</div>

						</div>
						<div className='sponsorpage-adcampaign-images-outer'>
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
						<p>GET IN TOUCH</p>
					</div>
					<div className='thinLine'></div>

					

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

			<div className='sixth-banner-container'>
				<div className='sponsors-outer'>
					<div className='sponsors-header-container'>
						<p>OUR SPONSORS</p>
					</div>
					<div className='thinLine'></div>
					<div className='sponsors-box-outer'>
						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={dragon_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="dragon pic"
								/>
							</div>
							<div className='sponsor-text2'>
								Dragonfly invests in top blockchain digital assets, combining years of traditional investment experience with blockchain expertise to find attractive investment opportunities in the digital asset market.
							</div>
						</div>

						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={houlihan_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="houlihan pic"
								/>
							</div>
							<div className='sponsor-text'>
								Houlihan Lokey is a leading global investment bank with expertise in mergers and acquisitions, capital markets, financial restructuring and valuation.
							</div>
						</div>

						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={jefferies_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="jefferies pic"
								/>
							</div>
							<div className='sponsor-text'>
								Jefferies is a diversified financial services company, a global leader in investment banking, and the largest independent, global, full-service IB firm in the US.
							</div>
						</div>

						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={credit_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="cs pic"
								/>
							</div>
							<div className='sponsor-text'>
								Credit Suisse Group is a leading financial services company, advising clients in all aspects of finance, across the globe and around the clock.
							</div>
						</div>

						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={flow_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="flow pic"
								/>
							</div>
							<div className='sponsor-text'>
								Since 2004, Flow Traders has been a principal trading firm and one of the world’s largest liquidity providers, specialised in Exchange Traded Products (ETPs).
							</div>
						</div>

						<div className='sponsor-box'>
							<div className='sponsor-image'>
								<Image
									src={nomura_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="flow pic"
								/>
							</div>
							<div className='sponsor-text'>
								Nomura is a leading global financial services group and investment bank with an integrated network spanning over 30 countries and regions.
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		</>
	)
}