import Image from 'next/image'
import './globals.css'

import cibsBackground_img from '../../public/resources/cibsBackground3.png'

import initiatives_img from '../../public/resources/events_new.png'
import events_img from '../../public/resources/events6.jpg'
import events2_img from '../../public/resources/events2.jpg'
import events3_img from '../../public/resources/events3.jpg'

import JoinButton from '@/components/joinbutton'
import JoinButton2 from '@/components/joinbutton2'
import SeeButton from '@/components/seebutton'
import SponsorsList from '@/components/sponsorsList'
import SocialMediaButtons from '@/components/socialMediaButtons'
import EmailLink from '@/components/emailLink'

//alumni destinations logos
//import barclays_alumni_img from '../../resources/alumniDestinations/barclaysLogo.png'
import blackrock_alumni_img from '../../public/resources/alumniDestinations/blackrockLogo.png'
import blackstone_alumni_img from '../../public/resources/alumniDestinations/blackstoneLogo.png'
import bofa_alumni_img from '../../public/resources/alumniDestinations/bofaLogo.png'
import citadel_alumni_img from '../../public/resources/alumniDestinations/citadelLogo.jpeg'
//import citi_alumni_img from '../../resources/alumniDestinations/citiLogo.png'
import evercore_alumni_img from '../../public/resources/alumniDestinations/evercoreLogo.png'
import goldman_alumni_img from '../../public/resources/alumniDestinations/goldmanLogo.png'
import houlihan_alumni_img from '../../public/resources/alumniDestinations/houlihanLogo.png'
import hsbc_alumni_img from '../../public/resources/alumniDestinations/hsbcLogo.png'
//import jefferies_alumni_img from '../../resources/alumniDestinations/jefferiesLogo.png'
import jpm_alumni_img from '../../public/resources/alumniDestinations/jpmLogo.jpeg'
import lazard_alumni_img from '../../public/resources/alumniDestinations/lazardLogo.png'
import ms_alumni_img from '../../public/resources/alumniDestinations/msLogo.png'
import pimco_alumni_img from '../../public/resources/alumniDestinations/pimcoLogo.jpeg'
import pwp_alumni_img from '../../public/resources/alumniDestinations/pwpLogo.png'
import roths_alumni_img from '../../public/resources/alumniDestinations/rothsLogo.png'
import ubs_alumni_img from '../../public/resources/alumniDestinations/ubsLogo.png'

export default function Home() {
  return (
	<>
	<div className='first-banner-container'>
		<Image
			src={cibsBackground_img}
			style={{objectFit: 'cover'}}
			fill={true}
			alt="background image"
			priority
		/>
		<div className='first-outer'>
			<div className='first-banner-text-outer'>
				<p>Cambridge Investment Banking Society</p>
			</div>
			<div className='first-banner-text-minor'>
				<p>Connecting Cambridge students with careers in finance</p>
			</div>
			<JoinButton></JoinButton>
		</div>
	</div>
    <div className='second-banner-container'>
		<div className='about-outer'>
			<div className='about-header-container'>
				<p>ABOUT US</p>
			</div>
			<div className='thinLine'></div>
			<div className='about-minor-container'>
				<p>The Cambridge Investment Banking Society (CIBS) gives Cambridge students opportunities to learn more about careers in the industry, build long-lasting networks, and ultimately secure highly competitive roles on insight, internship, and graduate programmes in finance. We have three core values which our events and initiatives aim to facilitate.</p>
			</div>
			<div className='about-values-container'>
				<p>OUR VALUES</p>
			</div>
			<div className='thinLine'></div>
			<div className='values-outer-box'>
				<div className='values-box'>
					<div className='values-box-banner'></div>
					<div className='values-box-header'>
						Collaboration
					</div>
					<div className='values-box-detail'>
						CIBS has one of the most vibrant, diverse and engaged member bases in Cambridge, allowing members to expand their networks.
					</div>
				</div>
				<div className='values-box'>
				<div className='values-box-banner'></div>
					<div className='values-box-header'>
						Finance Focus
					</div>
					<div className='values-box-detail'>
						CIBS offers events, workshops, and guidance across all areas, divisions and sectors of finance, attracting the most determined applicants from Cambridge and increasing their competitiveness.
					</div>
				</div>
				<div className='values-box'>
					<div className='values-box-banner'></div>
					<div className='values-box-header2'>
						Personal Connection
					</div>
					<div className='values-box-detail2'>
						We value long-term relationships and facilitate the development of personal connections amongst our members through building a close-knit community, maintaining lasting relationships with members and creating a wide network of bright and motivated individuals.
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className='wedo-banner-container'>
		<div className='wedo-outer'>
			<div className='wedo-header-container'>
				<p>WHAT WE DO</p>
			</div>
			<div className='thinLine'></div>

			<div className='wedo-container'>
				<div className='initiatives-text-container-outer'>
					<div className='wedo-header-container-smaller2'>
						<p>NETWORKING</p>
					</div>
					<div className='wedo-detail-container'>
						Members build relationships with firm representatives at networking events, getting to know the firm culture and open opportunities. Moreover, we have strong networks across the membership base, where members support each other in application processes.
					</div>
					<div className='wedo-button-outer'>
						<SeeButton urlString={'/events'} buttonText={'See our events'} />
					</div>
				</div>
				<div className='initiatives-image-container'>
					<Image
						src={initiatives_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>
			</div>

			<div className='wedo-container'>
				<div className='initiatives-image-container'>
					<Image
						src={events3_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>
				<div className='initiatives-text-container-outer'>
					<div className='wedo-header-container-smaller-right'>
						<p>CAREER GUIDANCE</p>
					</div>
					<div className='wedo-detail-container-right'>
						At our events previous successful applicants share their experiences of programmes across a wide variety of divisions whilst providing members a comprehensive understanding of the recruitment process, tips, and tricks.
					</div>
					<div className='wedo-button-outer-right'>
						<SeeButton urlString={'/events'} buttonText={'See our events'} />
					</div>
				</div>
			</div>

			<div className='wedo-container'>
				<div className='initiatives-text-container-outer'>
					<div className='wedo-header-container-smaller'>
						<p>INDUSTRY INSIGHTS</p>
					</div>
					<div className='wedo-detail-container'>
						We give our members insight into a variety of different fields and divisions of finance through technical workshops, insight talks, and panels with alumni and industry professionals.
					</div>
					<div className='wedo-button-outer'>
						<SeeButton urlString={'/events'} buttonText={'See our events'} />
					</div>
				</div>
				<div className='initiatives-image-container'>
					<Image
						src={events_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>
			</div>

			<div className='wedo-container'>
				<div className='initiatives-image-container'>
					<Image
						src={events2_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>
				<div className='initiatives-text-container-outer'>
					<div className='wedo-header-container-smaller-right'>
						<p>RESEARCH GROUP</p>
					</div>
					<div className='wedo-detail-container-right'>
						The Research Group and its analysts execute thorough research and provide insight into the world of finance through their research reports and articles.
					</div>
					<div className='wedo-button-outer-right'>
						<SeeButton urlString={'/researchgroup'} buttonText={'Learn more'} />
					</div>
				</div>
				
			</div>

			<div className='buffer'></div>
		</div>
	</div>

	<div className='social-media-call-banner-container'>
		<div className='joining-end-outer'>
			<div className='social-call-text-outer'>
				<p>Follow us on social media</p>
			</div>
			<div className='social-call-text-minor'>
				<p>Follow us to stay up to date on the latest events, opportunities, and socials</p>
			</div>
			<SocialMediaButtons />
		</div>
	</div>

	<div className='sixth-banner-container'>
		<div className='sponsors-outer'>
			<div className='sponsors-header-container'>
				<p>OUR SPONSORS</p>
			</div>
			<div className='thinLine'></div>
			<SponsorsList />
		</div>
	</div>

	<div className='alumni-destinations-banner-container'>
		<div className='alumni-destinations-outer'>
			<div className='alumni-header-container'>
				<p>ALUMNI DESTINATIONS</p>
			</div>
			<div className='thinLine'></div>
			<div className='alumni-destinations-outer-container'>

				<div className='alumni-destinations-box-container'>
					<Image
						src={ubs_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={blackrock_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={roths_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={blackstone_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={pwp_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={bofa_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={pimco_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={citadel_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={ms_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={lazard_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={evercore_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={jpm_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={goldman_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={houlihan_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>

				<div className='alumni-destinations-box-container'>
					<Image
						src={hsbc_alumni_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="alumni destination logo"
					/>
				</div>
			</div>
		</div>
	</div>

	<div className='joining-end-banner-container'>
		<div className='joining-end-outer'>
			<div className='joining-end-text-outer'>
				<p>Join The Cambridge Investment Banking Society</p>
			</div>
			<div className='joining-end-text-minor'>
				<p>Membership is free and open to everyone from all backgrounds and disciplines at the University of Cambridge</p>
			</div>
			<JoinButton2></JoinButton2>
		</div>
	</div>

	<div className='contact-banner-container'>
		<div className='contact-banner-outer'>
			<div className='contact-us-header-container'>
				<p>CONTACT US</p>
			</div>
			<div className='thinLine'></div>

			<div className='contact-minor-container-highlighted'>
				<p>
					If you have any queries, please feel free to contact us at:
				</p>
				<EmailLink emailText={"presidents@cibsoc.co.uk"}/>
			</div>
		</div>
	</div>

	</>
  )
}


/*
<div className='events-header-container'>
				<p>EVENTS</p>
			</div>
			<div className='thinLine-white'></div>

			<div className='thinLine'></div>

	<div className='third-banner-container'>
		<div className='events-outer'>
			<div className='initiatives-container'>
				<div className='initiatives-text-container-outer'>
					<div className='initiatives-header-container'>
						<p>OUR INITIATIVES</p>
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
					<Image
						src={initiatives_img}
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
						src={events_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>
				<div className='events-text-container-outer'>
					<div className='events-header-container'>
						<p>OUR EVENTS</p>
					</div>
					<div className='events-detail-container'>
						CIBS runs networking and career guidance events in addition to industry insights throughout the year to help students discover and succeed in different paths and areas of finance.
					</div>
					<div className='events-button-outer'>
						<div className='events-button-container'>
							<p>Learn more</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

*/
