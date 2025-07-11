'use client'

import Image from 'next/image'
import './eventslist.css'
import { useState } from 'react'

//pics 
import securingSummer_img from '../../public/resources/events/securingSummer.png'
import eloiseSpeaker_img from '../../public/resources/events/eloiseSpeaker.png'
import endDrinks_img from '../../public/resources/events/endDrinks.png'

import onyx_img from '../../public/resources/events/OnyxWorkshop.png'
import securesummer24_img from '../../public/resources/events/SecureSummer24.png'

import convertSpring_img from '../../public/resources/events/convertSpringPanel.png'
import convertSummer_img from '../../public/resources/events/convertSummerPanel.png'
import meetCommittee_img from '../../public/resources/events/meetCommitteeDrinks.png'

import division1_img from '../../public/resources/events/divisionBreakdown1.png'
import division2_img from '../../public/resources/events/divisionBreakdown2.png'
import division3_img from '../../public/resources/events/divisionBreakdown3.png'
import rajivSpeaker_img from '../../public/resources/events/speakerRajiv.png'

import cvWorkshop_img from '../../public/resources/events/cvWorkshop.png'
import howSpring_img from '../../public/resources/events/howSpringPanel.png'
import freshersDrinks_img from '../../public/resources/events/freshersDrinks.png'

import freshers_welcome_img from '../../public/resources/events/freshers_welcome_23.png'
import evercore_rx_img from '../../public/resources/events/everciore_rx.png'
import introspring_img from '../../public/resources/events/intro_spring.png'
import cvclwork_img from '../../public/resources/events/cvcl_workshop.png'
import rizzo_img from '../../public/resources/events/rizzo.png'
import man_img from '../../public/resources/events/man_women.png'
import socgen_pres_img from '../../public/resources/events/socgen_pres.png'

import evercoreadv_img from '../../public/resources/events/evercore_adv.png'
import goldmanfireside_img from '../../public/resources/events/goldman_fireside.png'
import apollowork_img from '../../public/resources/events/apollo_work.png'
import appianpres_img from '../../public/resources/events/appian_pres.png'

import cbfc_img from '../../public/resources/events/cbfc.png'
import mcomsoc_img from '../../public/resources/events/mcomsoc.png'
import convspring_img from '../../public/resources/events/convspring.png'
import convsum24_img from '../../public/resources/events/convsum24.png'

import logo_img from '../../public/resources/Logo_Icon_s.png'

const UpcomingEventsList = () => {

	const clickEvent1 = () => {
		window.open("https://www.facebook.com/CIBSoc", "_blank");
	}

	const clickSummer24 = () => {
		window.open("https://www.facebook.com/photo/?fbid=956485869816801&set=a.489461066519286", "_blank");
	}

	const clickOnyx = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid02SP7Ur32UXWoLgUQVZJn7T3RCARKCjTRcypj53MT9MexxCajpSdrDwqeeFgDpL1j1l", "_blank");
	}

	const clickManWomen = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid02n79fokmXjSnXrzT7TQHnbePyB2GrgD694wYoxpn4Mj6A2w79naY5xKAnepEEoWNjl", "_blank");
	}

	const clickSocgenPres = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid02rfmQLpVTAxhR6ukWiwvK42kUsUgQ7yYo665awa7oqfxXrJ8MQCPb4uYTPNYXREaxl", "_blank");
	}

	const clickRizzo = () => {
		window.open("https://www.facebook.com/photo/?fbid=817859897012733&set=a.489461066519286", "_blank");
	}

	const clickCVCL = () => {
		window.open("https://www.facebook.com/photo?fbid=816516957147027&set=a.489461066519286", "_blank");
	}

	const clickSpringPanel = () => {
		window.open("https://www.facebook.com/photo/?fbid=812828360849220&set=a.489461066519286", "_blank");
	}

	const clickEvercore = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid02nUSdyPpn3o5VXS5EZPt3u28xLYGbX4dSKdBRt1nwHXJkik9XozESQnDxfWWjyiWkl", "_blank");
	}

	const clickEvent2 = () => {
		window.open("https://www.facebook.com/photo/?fbid=807132448085478&set=a.489461066519286", "_blank");
	}

	const clickCBFC = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid0cYmVf8Nw7eUBKB9TtB9F9gALfsZj3V2Kv3rFZh6Eu2jBzUvdUHJi8AE8AjXqb8fDl", "_blank");
	}

	const clickComSoc = () => {
		window.open("https://www.facebook.com/photo/?fbid=892816502850405&set=a.489461066519286", "_blank");
	}

	const clickConvSpring = () => {
		window.open("https://www.facebook.com/photo?fbid=886984913433564&set=a.489461066519286", "_blank");
	}

	const clickApolloInsurance = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid0gUFc3HVUub9CyMKWWznh6aMzyc8Bj7f476aJanU169XpMXL85P1nLe3nnzAJsRchl", "_blank");
	}
	const clickGSFireside = () => {
		window.open("https://www.facebook.com/photo/?fbid=839620621503327&set=a.489461066519286", "_blank");
	}
	const clickAppianCap = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid02RsKvvNd5y9WkixshsEmoFhxsgjgbjYpFqLsMRr2uWNXvW7DnrDrSDj5qyuMV6jJfl", "_blank");
	}
	const clickEvercoreAdv = () => {
		window.open("https://www.facebook.com/CIBSoc/posts/pfbid0EFwQ1wpu5CgrHpu46snms7cRwCQxuPTVPAoTt6omD8xwc3MpTSr7dAgrQwzJFqsPl", "_blank");
	}

	const clickConvSum = () => {
		window.open("https://www.facebook.com/photo/?fbid=923302913135097&set=a.489461066519286", "_blank");
	}


	return(
		<>	
			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={securesummer24_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="convsum pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>May</div>
					<div className='date-box-day'>1</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Secure a Summer Internship
					</div>
					<div className='events-box-text-body-container'>
						Join us at CIBS for a ‘How to Secure a Summer Internship’ panel, followed by a networking social, on Wednesday, May 1st, from 5:00-7:00 pm in the Castlereagh Room, St. John’s College.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickSummer24}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={onyx_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="convsum pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Apr</div>
					<div className='date-box-day'>24</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Onyx Commodity Derivatives Workshop
					</div>
					<div className='events-box-text-body-container'>
						We are delighted to host Onyx Capital Group, an oil derivatives trading house, for a workshop on commodity derivatives from 5-6.30pm at Christ's College Seminar Room 2.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickOnyx}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={convsum24_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="convsum pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Mar</div>
					<div className='date-box-day'>11</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Convert Your Summer
					</div>
					<div className='events-box-text-body-container'>
						On Monday, 11th March, at 7:30pm, CIBS will be hosting a “How to Convert Your Summer Internship” panel in the Castlereagh Room, St John’s College. The event will include a panel discussion, audience Q&A and a networking social!
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickConvSum}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={cbfc_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="cbfc pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Feb</div>
					<div className='date-box-day'>28</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Cambridge Banking and Finance Conference
					</div>
					<div className='events-box-text-body-container'>
						CIBS' largest event yet: the Cambridge Banking and Finance Conference is coming on the 28th of February! Hosted by CIBS and powered by FELIX, the conference features a slew of events including panel discussions with industry professionals, fireside chats with keynote speakers, and technical workshops conducted by professional trainers, all topped off with a 3-course buffet dinner!					
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickCBFC}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={mcomsoc_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="mcomsoc pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Feb</div>
					<div className='date-box-day'>1</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Meet the Committee Evening
					</div>
					<div className='events-box-text-body-container'>
						Get to know members of the committee - this should be a great opportunity to find out more about what it's like being on the CIBS committee, and make an impression beyond your written application. Join us on Thursday, 1st of February from 7.30pm-9pm at Newnham Bar, Newnham College.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickComSoc}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={convspring_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="convspring pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Jan</div>
					<div className='date-box-day'>25</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Convert Your Spring Week
					</div>
					<div className='events-box-text-body-container'>
						On Thursday, 25th January, at 7:00 PM, CIBS will be hosting our annual 'How to Convert Your Spring Week' panel. We will host five panellists who have converted Spring Weeks across a range of leading banks, including Morgan Stanley, Bank of America, Barclays, Standard Chartered, and Lazard.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickConvSpring}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={apollowork_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="apollo pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Dec</div>
					<div className='date-box-day'>14</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Apollo Insurance AM Workshop
					</div>
					<div className='events-box-text-body-container'>
						Apollo Global Management, one of the largest alternatives asset managers in the world with over $500bn in AUM, is holding an exclusive workshop for all CIBS and CUFIS members. The workshop will be held on Zoom, on Tuesday 14th December, from 1-2 pm.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickApolloInsurance}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={goldmanfireside_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="goldman pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>20</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Fireside Chat w/ Goldman Sachs LevFin
					</div>
					<div className='events-box-text-body-container'>
						The perfect opportunity to hear both from one of the most senior bankers in the industry, as well as a recent graduate who will be able to offer the most relevant early careers advice! This event will take place from 5:30 pm on Monday, November 20th in Seminar Room 2 at Christ’s College.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickGSFireside}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={appianpres_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="appian pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>2</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Appian Capital Workshop
					</div>
					<div className='events-box-text-body-container'>
						Join us for an exclusive workshop hosted by Appian Capital Advisory x CIBS on Thursday, November 2nd, from 6-8 pm, and discover more about Appian, a private equity firm uniquely focused on metals, mining, and infrastructure.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickAppianCap}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={man_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="man pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>31</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Man AHL Women in Quant
					</div>
					<div className='events-box-text-body-container'>
						Man AHL, the quantitative trading arm of the world’s largest publicly listed hedge fund, is hosting their Women in Quant event on Tuesday 31st October, 7-9 pm.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickManWomen}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={evercoreadv_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="evercore pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>26</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Evercore Advisory Workshop
					</div>
					<div className='events-box-text-body-container'>
						Evercore's Advisory team will be hosting an exclusive workshop with CIBS on Thursday, 26th October, from 7 - 9 pm at the Bateman Auditorium in Gonville and Caius College. The workshop will provide participants an insight into Evercore's Advisory team, featuring bankers from the team. 
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvercoreAdv}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={socgen_pres_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="socgen pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>24</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Societe Generale Presentation and Workshop
					</div>
					<div className='events-box-text-body-container'>
						Join us for an enlightening evening with Société Générale Group on Tuesday, Oct 24th, at Queens' College's Bowett Room from 4pm. There will be networking opportunities, along with a chance for Q&A.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickSocgenPres}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={rizzo_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="rizzo pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>19</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Speaker Event: Luigi Rizzo
					</div>
					<div className='events-box-text-body-container'>
						We are delighted to announce that we will be hosting Luigi Rizzo, Vice Chairman of Investment Banking at Morgan Stanley, for a speaker event. This will take place from 3:30pm at Palmerston Room, St John’s College.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickRizzo}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={cvclwork_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="cvcl workshop pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>17</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						CV & Cover Letter Workshop
					</div>
					<div className='events-box-text-body-container'>
						Are you not sure how to write a great CV or Cover Letter? If so, you're not alone. As these documents are a crucial part of most applications, whether for spring weeks or summers, CIBS is pleased to announce that we will be running a CV and Cover Letter Workshop at 6-8pm on 17th October in the Bowett Room, Queens' College.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickCVCL}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={introspring_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="intro spring pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>13</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Intro to Finance & Spring Week Panel
					</div>
					<div className='events-box-text-body-container'>
						Join CIBS on Friday October 13th at 7 pm for an Introduction to Finance, followed by our panel discussion: How to Secure a Spring Week. If you’re not sure about what investment banking actually is, what it’s like working as a trader, come along and we’ll give you a breakdown of how to break into a career in finance, and what you need to do at university.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickSpringPanel}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={evercore_rx_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="freshers drinks pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>9</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Evercore Restructuring Workshop
					</div>
					<div className='events-box-text-body-container'>
						Evercore's restructuring team will be hosting an exclusive workshop with CIBS on Monday, 9th October, from 7 - 9 pm at the Castlereagh Room in St. John's College. The workshop will allow participants to gain an understanding of restructuring and will feature senior bankers from Evercore's restructuring team. The team will provide an overview of Evercore, its restructuring team, and what restructuring is all about, as well as some case studies.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvercore}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={freshers_welcome_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="freshers drinks pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>5</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Freshers' Welcome Drinks
					</div>
					<div className='events-box-text-body-container'>
						Come and enjoy complimentary drinks, mingle with our friendly committee and Research Group, and meet freshers from various colleges. We'll also share exciting details about our upcoming events, discuss our interview and mentorship programs, answer your questions about becoming a CIBS ambassador, and, most importantly, have a fantastic time! Time: 18:30 - 20:30 BST
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent2}>
							Learn more
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

const PastEventsList = () => {
	const clickEvent1 = () => {
		window.open("https://www.facebook.com/photo/?fbid=695573089241415&set=a.489461066519286", "_blank");
	}

	const clickEvent2 = () => {
		window.open("https://www.facebook.com/events/1526777741180421", "_blank");
	}

	const clickEvent3 = () => {
		window.open("https://www.facebook.com/events/1389111651849680", "_blank");
	}

	const clickEvent4 = () => {
		window.open("https://www.facebook.com/photo/?fbid=642405204558204&set=a.489461066519286", "_blank");
	}

	const clickEvent5 = () => {
		window.open("https://www.facebook.com/photo?fbid=637015131763878&set=a.489461066519286", "_blank");
	}

	const clickEvent6 = () => {
		window.open("https://www.facebook.com/photo/?fbid=625284192936972&set=a.489461066519286", "_blank");
	}

	const clickEvent7 = () => {
		window.open("https://www.facebook.com/events/2203154956511991/?ref=newsfeed", "_blank");
	}

	const clickEvent8 = () => {
		window.open("https://www.facebook.com/events/3229819827231792/?ref=newsfeed", "_blank");
	}

	const clickEvent9 = () => {
		window.open("https://www.facebook.com/events/1287646558478694/?ref=newsfeed", "_blank");
	}

	const clickEvent10 = () => {
		window.open("https://www.facebook.com/events/847644773040859/?ref=newsfeed", "_blank");
	}

	const clickEvent11 = () => {
		window.open("https://www.facebook.com/events/5253311951463022/?ref=newsfeed", "_blank");
	}

	const clickEvent12 = () => {
		window.open("https://www.facebook.com/events/2933264360311305/?ref=newsfeed", "_blank");
	}

	const clickEvent13 = () => {
		window.open("https://www.facebook.com/events/560319762530297/?ref=newsfeed", "_blank");
	}


	return(
		<>
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
						<div className='events-box-text-button-container' onClick={clickEvent1}>
							Learn more
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
						<div className='events-box-text-button-container' onClick={clickEvent2}>
							Learn more
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
						<div className='events-box-text-button-container' onClick={clickEvent3}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={convertSpring_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Mar</div>
					<div className='date-box-day'>2</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Convert Your Spring Week
					</div>
					<div className='events-box-text-body-container'>
						On Thursday 2nd March at 7:30pm, CIBS will be hosting our annual “How to Convert your Spring Week” panel. We will be hosting 3 panellists who have converted Spring Weeks across a range of leading banks, including Goldman Sachs, Morgan Stanley, Lazard, Macquarie and Credit Suisse. 
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent4}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={convertSummer_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Feb</div>
					<div className='date-box-day'>21</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Convert Your Summer Internship
					</div>
					<div className='events-box-text-body-container'>
						On Tuesday 21st February at 8pm, CIBS will be hosting a “How to Convert Your Summer Internship” panel. The event will last an hour and will include a 40-minute panel discussion and a 20-minute audience Q&A.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent5}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={meetCommittee_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Feb</div>
					<div className='date-box-day'>6</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Meet the Committee
					</div>
					<div className='events-box-text-body-container'>
						Grab some drinks and get to know members of the committee! This should be a great opportunity to find out more about what it's like being on the CIBS committee. We'll be ready to answer questions regarding the roles, investment banking and anything else you want to ask!
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent6}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={division3_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>30</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Division Breakdown - Sales & Trading
					</div>
					<div className='events-box-text-body-container'>
						Are you excited to learn more about the fast-paced nature of Sales and Trading, and what it takes to succeed in the role? Then come along this Wednesday to our Sales and Trading Division Breakdown, where you can discover the answer to all of these questions!
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent7}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={division2_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>23</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Division Breakdown - Capital Markets
					</div>
					<div className='events-box-text-body-container'>
						Have you ever wondered what the Capital Markets Division does and how it differs from other divisions within an investment bank? Following this Wednesday’s first Division Breakdown event, on Wednesday 23rd November at 7:30 pm, CIBS will be hosting our second Division Breakdown this year, with this week’s focus being Capital Markets Division.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent8}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={rajivSpeaker_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>17</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Senior Speaker Series - Rajiv Amlani
					</div>
					<div className='events-box-text-body-container'>
						We are delighted to announce our first event in our Senior Speaker Series this year. On Thursday 17th November at 2pm, we will be speaking to Managing Director Rajiv Amlani, who holds an MA in Economics from Cambridge!
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent9}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={division1_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Nov</div>
					<div className='date-box-day'>9</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Division Breakdown - Investment Banking
					</div>
					<div className='events-box-text-body-container'>
						On Wednesday 9th November at 7:30pm, CIBS will be hosting our first Division Breakdown of this year, with this week’s focus being Investment Banking Division. 
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent10}>
							Learn more
						</div>
					</div>
				</div>
			</div>


			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={cvWorkshop_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>18</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						CV & Cover Letter Workshop
					</div>
					<div className='events-box-text-body-container'>
						CIBS is pleased to announce that we will be running a CV and Cover Letter Workshop at 5pm on Tuesday 18th October. The workshop will give personalised feedback on CVs submitted by attendees as well as crucial tips on how to improve any CV or cover letter. We will also be looking at examples of successful cover letters and there will be plenty of time for Q&A, so that everybody learns something and can apply it to their applications.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent11}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={howSpring_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>10</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						How to Secure a Spring Week
					</div>
					<div className='events-box-text-body-container'>
						On Monday 10th October at 5.30 pm, CIBS will be hosting a “How to Secure a Spring Week” panel. With deadlines for spring weeks in 2023 fast approaching, this is a fantastic opportunity for students considering applying to get top tips from those who successfully secured a spring week for 2022.
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent12}>
							Learn more
						</div>
					</div>
				</div>
			</div>

			<div className='events-box-container'>
				<div className='image-events-outer-container'>
					<Image
						src={freshersDrinks_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="initiatives pic"
					/>
				</div>

				<div className='date-box-outer'>
					<div className='date-box-month'>Oct</div>
					<div className='date-box-day'>6</div>
				</div>

				<div className='events-box-text-outer-container'>
					<div className='events-box-text-header-container'>
						Freshers' Welcome Drinks
					</div>
					<div className='events-box-text-body-container'>
					You’re invited to CIBS’ first in-person event of the year: Freshers’ Welcome Drinks! Drop by to enjoy some (free!) drinks and chat to our friendly committee and Research Group, as well as meeting freshers from different colleges. You’ll get to hear more about our exciting line-up of events for this term, learn about our interview and mentorship schemes, ask questions about becoming a CIBS ambassador and just have a good time!
					</div>
					<div className='events-box-text-button-outer-container'>
						<div className='events-box-text-button-container' onClick={clickEvent13}>
							Learn more
						</div>
					</div>
				</div>
			</div>

		</>
	)
}


export default function EventsList() {

	const [currentSelection, setCurrentSelection] = useState(0);

	const selectionChange = (id) => {
        setCurrentSelection(id);
    }

	return (
		<>
			<div className='events-list-outer'>
				<div className='events-list-header'>
					<div className={`events-list-upcoming-cont${currentSelection===0 ? 'S' : 'R'}`} onClick={() => selectionChange(0)}>2023-2024</div>
					<div className={`events-list-past-cont${currentSelection===0 ? 'R' : 'S'}`} onClick={() => selectionChange(1)}>2022-2023</div>
				</div>

				{currentSelection===0 && <UpcomingEventsList />}
				{currentSelection===1 && <PastEventsList />}

			</div>
		</>
	)
}