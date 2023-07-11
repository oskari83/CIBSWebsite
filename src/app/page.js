import Image from 'next/image'
import './globals.css'
import img from '../../resources/Logo_Icon.png'
import background_img from '../../resources/background2.jpg'
import initiatives_img from '../../resources/initiatives1.png'
import events_img from '../../resources/events6.jpg'

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
					<p>Home</p>
				</div>
				<div className='navbar-link'>
					<p>What we do</p>
				</div>
				<div className='navbar-link'>
					<p>Sponsors</p>
				</div>
				<div className='navbar-link'>
					<p>Research Group</p>
				</div>
				<div className='navbar-link'>
					<p>Members</p>
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
					<div className='committee-box-image-container'></div>
					<div className='committee-box-text-container'>
						<div className='committee-text-name'></div>
						<div className='committee-text-role'></div>
						<div className='committee-text-college'></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className='footer-container'>
		
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
