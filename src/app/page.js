import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import img from '../../resources/Logo_Icon.png'
import background_img from '../../resources/background2.jpg'
import initiatives_img from '../../resources/initiatives1.png'
import events_img from '../../resources/events6.jpg'

//committee photos
import vanessa_img from '../../resources/committee/Vanessa-min.JPG'
import juhyun_img from '../../resources/committee/Juhyun-min.JPG'
import matthew_img from '../../resources/committee/Matthew-min.JPG'
import divy_img from '../../resources/committee/Divy-min.JPG'
import olivia_img from '../../resources/committee/Olivia-min.JPG'
import amir_img from '../../resources/committee/Amir-min.JPG'
import amrita_img from '../../resources/committee/Amrita-min.JPG'
import evelyn_img from '../../resources/committee/Evelyn-min.JPG'
import jennia_img from '../../resources/committee/Jennia-min.JPG'
import oskari_img from '../../resources/committee/Oskari-min.JPG'
import kenneth_img from '../../resources/committee/Kenneth-min.JPG'
import vimal_img from '../../resources/committee/Vimal-min.JPG'
import anson_img from '../../resources/committee/Anson-min.JPG'
import alan_img from '../../resources/committee/Alan-min.JPG'
import richard_img from '../../resources/committee/Shen-min.JPG'

//sponsors photos
import credit_img from '../../resources/sponsors/creditsuisse.png'
import dragon_img from '../../resources/sponsors/dragonfly.png'
import flow_img from '../../resources/sponsors/flowtraders.png'
import houlihan_img from '../../resources/sponsors/houlihan.png'
import jefferies_img from '../../resources/sponsors/jefferies.png'

//footer
import logo2_img from '../../resources/cibs_logo2.png'

export default function Home() {
  return (
	<>
	<div className='navbar'>
		<div className='navbar-inner'>
			<div className='identity-outer-container'>
				<div className='logo-outer-container'>
					<Image
						src={img}
						width={28}
						height={28}
						alt="cibs logo"
					/>
				</div>
				<div className='logo-outer-container'>
				<p className='logotext'>CIBS</p>
				</div>
			</div>
			<div className='navbarlinks-outer-container'>
				<div className='navbar-link'>
					<Link href={`/`}>Home</Link>
				</div>
				<div className='navbar-link'>
					<Link href={`/sponsors`}>What we do</Link>
				</div>
				<div className='navbar-link'>
					<Link href={`/sponsors`}>Sponsors</Link>
				</div>
				<div className='navbar-link'>
					<Link href={`/researchgroup`}>Research Group</Link>
				</div>
				<div className='navbar-link'>
					<Link href={`/members`}>Members</Link>
				</div>
			</div>
		</div>
	</div>
	<div className='first-banner-container'>
		<Image
			src={background_img}
			fill={true}
			alt="background image"
		/>
		<div className='first-banner-text-outer'>
			<p>Cambridge Investment Banking Society</p>
		</div>
		<div className='first-banner-text-minor'>
			<p>Connecting Cambridge students with careers in finance</p>
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

	<div className='fifth-banner-container'>
		<div className='committee-outer'>
			<div className='about-header-container'>
				<p>COMMITTEE</p>
			</div>
			<div className='thinLine'></div>
			<div className='committee-message-container'>
				<p>A warm welcome from our committee!</p>
				<div className='space-10px'></div>
				<p>Welcome to CIBS! We are so excited to lead Cambridge Investment Banking Society this year. We aim to connect Cambridge students with opportunities within the financial services industry and help equip them with the skills necessary to succeed within finance. Make sure to join us and we look forward to seeing you at our events!</p>
				<div className='space-10px'></div>
				<p className='committee-text-right-pos'>Vanessa, Matthew and Juhyun</p>
				<p className='committee-text-right-pos'>CIBS Presidents 2023-24</p>
			</div>

			<div className='committee-boxes-outer'>
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={vanessa_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="vanessa pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Vanessa Chen</div>
						<div className='committee-text-role'>President</div>
						<div className='committee-text-college'>Gonville and Caius College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={juhyun_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="juhyun pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Juhyun Park</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Hughes Hall College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={matthew_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="matthew pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Matthew Liu</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Girton College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={divy_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="divy pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Divy Dayal</div>
						<div className='committee-text-role'>Treasurer</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={olivia_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="olivia pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Olivia Moynihan</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={amir_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="amir pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Amir Sheikh</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Queens' College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={amrita_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="amrita pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Amrita Chockkalingam</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Selwyn College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={evelyn_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="evelyn pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Evelyn Lu</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Fitzwilliam College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={jennia_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="vanessa pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Jennia Yang</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Emmanuel College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={oskari_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="oskari pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Oskari Peltonen</div>
						<div className='committee-text-role'>Technology Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={kenneth_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="kenneth pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Kenneth Weng</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={vimal_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="vimal pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Vimal Kamath</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={anson_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="anson pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Anson Tay</div>
						<div className='committee-text-role'>Research Group Executive Director</div>
						<div className='committee-text-college'>St Edmund's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={alan_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="alan pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Alan Tan</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>St Edmund's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={richard_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="richard pic"
						/>
					</div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Richard lin</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<div className='seventh-banner-container'>
		<div className='ambassadors-outer'>
			<div className='sponsors-header-container'>
				<p>AMBASSADORS</p>
			</div>
			<div className='thinLine'></div>
		</div>
	</div>

	<div className='sixth-banner-container'>
		<div className='sponsors-outer'>
			<div className='sponsors-header-container'>
				<p>SPONSORS</p>
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

	<div className='footer-container'>
		<div className='footer-outer'>
			<div className='footer-above-container'>
				<div className='footer-logo-container'>
					<div className='footer-logo-image'>
						<Image
							src={logo2_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="logo pic"
						/>
					</div>
				</div>
			</div>
			<div className='footer-line'></div>
			<div className='footer-copyright-outer'>
			<div className='footer-privacy-text'>Privacy Policy</div>
				<div className='footer-copyright-text'>Copyright © 2023 Cambridge Investment Banking Society. All rights reserved.</div>
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

*/
