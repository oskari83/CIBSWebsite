import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import img from '../../resources/Logo_Icon.png'


import background_img from '../../resources/background2.jpg'
import cibsBackground_img from '../../resources/cibsBackground2.png'

import initiatives_img from '../../resources/initiatives1.png'
import events_img from '../../resources/events6.jpg'

import JoinButton from '@/components/joinbutton'
import JoinButton2 from '@/components/joinbutton2'

//sponsors photos
import credit_img from '../../resources/sponsors/creditsuisse.png'
import dragon_img from '../../resources/sponsors/dragonfly.png'
import flow_img from '../../resources/sponsors/flowtraders.png'
import houlihan_img from '../../resources/sponsors/houlihan.png'
import jefferies_img from '../../resources/sponsors/jefferies.png'

//alumni destinations logos
import barclays_alumni_img from '../../resources/alumniDestinations/barclaysLogo.png'
import blackrock_alumni_img from '../../resources/alumniDestinations/blackrockLogo.png'
import blackstone_alumni_img from '../../resources/alumniDestinations/blackstoneLogo.png'
import bofa_alumni_img from '../../resources/alumniDestinations/bofaLogo.png'
import citadel_alumni_img from '../../resources/alumniDestinations/citadelLogo.jpeg'
import citi_alumni_img from '../../resources/alumniDestinations/citiLogo.png'
import evercore_alumni_img from '../../resources/alumniDestinations/evercoreLogo.png'
import goldman_alumni_img from '../../resources/alumniDestinations/goldmanLogo.png'
import houlihan_alumni_img from '../../resources/alumniDestinations/houlihanLogo.png'
import hsbc_alumni_img from '../../resources/alumniDestinations/hsbcLogo.png'
import jefferies_alumni_img from '../../resources/alumniDestinations/jefferiesLogo.png'
import jpm_alumni_img from '../../resources/alumniDestinations/jpmLogo.jpeg'
import lazard_alumni_img from '../../resources/alumniDestinations/lazardLogo.png'
import ms_alumni_img from '../../resources/alumniDestinations/msLogo.png'
import pimco_alumni_img from '../../resources/alumniDestinations/pimcoLogo.jpeg'
import pwp_alumni_img from '../../resources/alumniDestinations/pwpLogo.png'
import roths_alumni_img from '../../resources/alumniDestinations/rothsLogo.png'
import ubs_alumni_img from '../../resources/alumniDestinations/ubsLogo.png'


export default function Home() {
  return (
	<>
	
	<div className='first-banner-container'>
		<Image
			src={cibsBackground_img}
			style={{objectFit: 'cover'}}
			fill={true}
			alt="background image"
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
				<p>The Cambridge Investment Banking Society (CIBS) gives Cambridge students opportunities to learn more about careers in the industry, build long-lasting networks, and ultimately secure highly competitive roles on insight, internship, and graduate programmes at investment banks. We have three core values which our events and initiatives aim to facilitate.</p>
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
						Finance focus
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
			</div>
		</div>
	</div>

	<div className='alumni-destinations-banner-container'>
		<div className='alumni-destinations-outer'>
			<div className='sponsors-header-container'>
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


/*
<div className='events-header-container'>
				<p>EVENTS</p>
			</div>
			<div className='thinLine-white'></div>

*/
