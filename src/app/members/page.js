import Image from 'next/image'
import Link from 'next/link'
import './members.css'

export default function Page(){

	return(
		<>
			<div className='members-navbar'>
				<div className='members-navbar-inner'>
					<div className='members-navbarlinks-outer-container'>
						<div className='members-navbar-link'>Overview</div>
						<div className='members-navbar-link'>Resources</div>
						<div className='members-navbar-link'>CIBS Connect</div>
					</div>
				</div>
			</div>
			<div className='members-banner-container'>
				<div className='members-outer'>
					<div className='members-header-container'>
						<p>MEMBERS AREA</p>
					</div>
					<div className='thinLine'></div>
					<div className='members-minor-container'>
						<p>
							Here, you will find updates on workshops and events organised by CIBS, as well as applications/technical resources and videos from CIBS Connect.
						</p>
					</div>

					<div className='members-area-header-container'>
						Application Guides & Resources
					</div>
					<div className='members-area-minor-text-container'>
						We are working on a series of application guides to ensure you the best success during application season. These will include insights into the different divisions found at investment banks, tips for application processes, and much more. We will also update this page with resources from our workshops.
					</div>

					<div className='members-area-header-container'>
						CIBS Connect
					</div>
					<div className='members-area-minor-text-container'>
						CIBS Connect is an initiative created in order to provide more personal insights into the world of investment banking. We discuss pathways into the industry, skills and abilities needed for the role, and career progression. Tune in to our first two episodes with MDs from RBC Capital Markets and Morgan Stanley.
					</div>

					<div className='members-area-header-container'>
						Social Media
					</div>
					<div className='members-area-minor-text-container'>
						Follow CIBS on all social media to keep up-to-date with our events and competitions. Our LinkedIn page is also updated with links to the latest articles from our research group, which are a valuable resource in keeping in touch with the latest industry developments. Every week, four commercial awareness quiz questions are posted to our Instagram - a great way to see how much you've retained from this week's news! Finally, on Facebook, you can find all upcoming workshops and socials.
					</div>
				</div>
			</div>
		</>
	)
}