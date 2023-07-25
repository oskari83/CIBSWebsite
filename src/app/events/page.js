import Image from 'next/image'
import Link from 'next/link'
import './events.css'

//pics 
import securingSummer_img from '../../../resources/events/securingSummer.png'
import eloiseSpeaker_img from '../../../resources/events/eloiseSpeaker.png'
import endDrinks_img from '../../../resources/events/endDrinks.png'

export default function Page(){
	return(
		<>
		<div className='eventspage-banner-container'>
			<div className='eventspage-outer'>
				<div className='eventspage-header-container'>
					<p>EVENTS AND INITIATIVES</p>
				</div>
				<div className='thinLine'></div>
				<div className='eventspage-minor-container'>
					<p>
						Text here...
					</p>
				</div>

				<div className='events-list-outer'>
					<div className='events-list-header'>
						<div className='events-list-upcoming-cont'>UPCOMING</div>
						<div className='events-list-past-cont'>PAST ARCHIVE</div>
					</div>

					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={securingSummer_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='date-box-outer'>
							<div className='date-box-month'>May</div>
							<div className='date-box-day'>4</div>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								How to Secure a Summer Internship
							</div>
							<div className='events-box-text-body-container'>
								CIBS will be hosting a ‘How to Secure a Summer Internship’ panel, followed by a networking social, on Thursday 4th May at 7:30 pm in the Boys Smith Room (St. Johns College). With openings for 2024 finance summer internships approaching, this is a fantastic opportunity to get top tips from those who have successfully secured a summer internship for 2023. This event will be particularly relevant to students graduating in 2025.
							</div>
							<div className='events-box-text-button-outer-container'>
								<div className='events-box-text-button-container'>
									Sign up
								</div>
							</div>
						</div>
					</div>

					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={endDrinks_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='date-box-outer'>
							<div className='date-box-month'>Mar</div>
							<div className='date-box-day'>15</div>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								End of Term Drinks
							</div>
							<div className='events-box-text-body-container'>
								Hooray, we’ve reached the end of term! From all the CIBS committee, we hope you have had a wonderful Lent term, and that you’re looking forward to any approaching spring weeks or summer internships that you’ve secured. To celebrate, CIBS will be hosting an end of term drinks (all free!) at the Old Divinity School in St John’s College, on Wednesday 15th March at 8pm.
							</div>
							<div className='events-box-text-button-outer-container'>
								<div className='events-box-text-button-container'>
									Sign up
								</div>
							</div>
						</div>
					</div>

					<div className='events-box-container'>
						<div className='image-events-outer-container'>
							<Image
								src={eloiseSpeaker_img}
								style={{objectFit: 'cover'}}
								fill={true}
								alt="initiatives pic"
							/>
						</div>

						<div className='date-box-outer'>
							<div className='date-box-month'>Mar</div>
							<div className='date-box-day'>10</div>
						</div>

						<div className='events-box-text-outer-container'>
							<div className='events-box-text-header-container'>
								Senior Speaker Series - Eloise Goulder
							</div>
							<div className='events-box-text-body-container'>
								On March 10th at 1 PM, we will have the privilege of speaking with Eloise Goulder, Managing Director at J.P. Morgan with over 20 years of experience in finance, who heads the Global Data Assets & Alpha Group within Global Equity Trading - also a Cambridge economics alumna!
							</div>
							<div className='events-box-text-button-outer-container'>
								<div className='events-box-text-button-container'>
									Sign up
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
		</>
	)
}