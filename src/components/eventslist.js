'use client'

import Image from 'next/image'
import './eventslist.css'
import { useState } from 'react'

//pics 
import securingSummer_img from '../../public/resources/events/securingSummer.png'
import eloiseSpeaker_img from '../../public/resources/events/eloiseSpeaker.png'
import endDrinks_img from '../../public/resources/events/endDrinks.png'

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

import logo_img from '../../public/resources/Logo_Icon_s.png'

const UpcomingEventsList = () => {

	const clickEvent1 = () => {
		window.open("https://www.facebook.com/CIBSoc", "_blank");
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


	return(
		<>
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
					<div className={`events-list-past-cont${currentSelection===0 ? 'R' : 'S'}`} onClick={() => selectionChange(1)}>PAST ARCHIVE (2022-2023)</div>
				</div>

				{currentSelection===0 && <UpcomingEventsList />}
				{currentSelection===1 && <PastEventsList />}

			</div>
		</>
	)
}