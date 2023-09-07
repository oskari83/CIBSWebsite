'use client'

import Image from 'next/image'
import './membersarea.css'
import { useState } from 'react'
import { useEffect } from 'react';

import JoinButton3 from './joinbutton3';

import springGuide_img from '../../public/resources/membersArea/springGuide.png'
import workshop1_img from '../../public/resources/membersArea/workshop1.png'
import workshop2_img from '../../public/resources/membersArea/workshop2.png'
import workshop3_img from '../../public/resources/membersArea/workshop3.png'
import spring_pdf from '../../public/resources/membersArea/spring-week-guide.pdf'

import connect_img from '../../public/resources/membersArea/connect.png'

import PocketBase from 'pocketbase';

const url = 'https://cibs-website.pockethost.io'
const url2 = 'http://127.0.0.1:8090'

const pb = new PocketBase(url);

const MembersOverview = ({selectionFunc}) => {
	return(
		<>
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

					<div className='members-area-major-box-container'>
						<div className='members-area-header-outer-container'>
							<div className='members-area-header-container'>
								Application Guides & Resources
							</div>
							<div className='members-area-button-outer-container'>
								<div className='members-area-button-box' onClick={() => selectionFunc(1)}>
									Access here
								</div>
							</div>
						</div>
				
						<div className='members-area-minor-text-container'>
							We are working on a series of application guides to ensure you the best success during application season. These will include insights into the different divisions found at investment banks, tips for application processes, and much more. We will also update this page with resources from our workshops.
						</div>
					</div>
					
					<div className='members-area-major-box-container'>
						<div className='members-area-header-outer-container'>
							<div className='members-area-header-container'>
								CIBS Connect
							</div>
							<div className='members-area-button-outer-container'>
								<div className='members-area-button-box' onClick={() => selectionFunc(2)}>
									Access here
								</div>
							</div>
						</div>
						<div className='members-area-minor-text-container'>
							CIBS Connect is an initiative created in order to provide more personal insights into the world of investment banking. We discuss pathways into the industry, skills and abilities needed for the role, and career progression. Tune in to our first two episodes with MDs from RBC Capital Markets and Morgan Stanley.
						</div>
					</div>

					<div className='members-area-header-outer-container2'>
						<div className='members-area-header-container'>
							Social Media
						</div>
					</div>
					<div className='members-area-minor-text-container2'>
						Follow CIBS on all social media to keep up-to-date with our events and competitions. Our LinkedIn page is also updated with links to the latest articles from our research group, which are a valuable resource in keeping in touch with the latest industry developments. Every week, four commercial awareness quiz questions are posted to our Instagram - a great way to see how much you've retained from this week's news! Finally, on Facebook, you can find all upcoming workshops and socials.
					</div>
				</div>
			</div>
		</>
	)
}

const MembersResources = () => {

	const clickResource1 = () => {
		window.open("https://www.youtube.com/watch?v=M0F3qX46lhk", "_blank");
	}

	const clickResource2 = () => {
		window.open("https://www.youtube.com/watch?v=pImetaaJrcU", "_blank");
	}

	const clickResource3 = () => {
		window.open("https://www.youtube.com/watch?v=A5IFsuI1I6w", "_blank");
	}

	const clickPDF = () => {
		window.open(spring_pdf, "_blank");
	}

	return(
		<>
			<div className='members-banner-container'>
				<div className='members-outer2'>
					<div className='members-header-container'>
						<p>RESOURCES</p>
					</div>
					<div className='thinLine'></div>
					<div className='members-minor-container'>
						<p>
							We are currently in the process of preparing a series of guides. We intend to produce a comprehensive set of guides over the next two years and we will alert you as we produce them through our Roundups and social media platforms. You can find the guides that we have created so far linked below. Please do not share these materials with others, but feel free to encourage your friends to join CIBS!
						</p>
					</div>

					<div className='resources-list-outer'>
						<div className='resources-list-header'>Application Guides</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={springGuide_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									Spring Week Guide
								</div>
								<div className='events-box-text-body-container'>
									Our first application guide provides a wealth of tips and advice across every stage of the application process. The unique firm-specific portion of our guide covers application processes by firm, and even includes unique cultural aspects of each firm. Each firm-specific page of our guide was compiled through consultation with a past spring or summer intern at that firm.
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container'>
										<a href='/resources/membersArea/spring-week-guide.pdf' download="spring-week-guide.pdf">Access</a>
										
									</div>
								</div>
							</div>
						</div>

						<div className='resources-list-header'>M&A Technicals Workshops</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={workshop1_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									M&A Technicals #1: Accounting Fundamentals
								</div>
								<div className='events-box-text-body-container'>
									Grab some drinks and get to know members of the committee! This should be a great opportunity to find out more about what it's like being on the CIBS committee. We'll be ready to answer questions regarding the roles, investment banking and anything else you want to ask!
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container' onClick={clickResource1}>
										Watch now
									</div>
								</div>
							</div>
						</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={workshop2_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									M&A Technicals #2: Valuation Methods
								</div>
								<div className='events-box-text-body-container'>
									Grab some drinks and get to know members of the committee! This should be a great opportunity to find out more about what it's like being on the CIBS committee. We'll be ready to answer questions regarding the roles, investment banking and anything else you want to ask!
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container' onClick={clickResource2}>
										Watch now
									</div>
								</div>
							</div>
						</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={workshop3_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									M&A Technicals #3: Intrinsic Valuation - DCF
								</div>
								<div className='events-box-text-body-container'>
									Grab some drinks and get to know members of the committee! This should be a great opportunity to find out more about what it's like being on the CIBS committee. We'll be ready to answer questions regarding the roles, investment banking and anything else you want to ask!
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container' onClick={clickResource3}>
										Watch now
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

const MembersCibsConnect = () => {

	const clickResource1 = () => {
		window.open("https://www.youtube.com/watch?v=4J7xU8my3LA", "_blank");
	}

	const clickResource2 = () => {
		window.open("https://www.youtube.com/watch?v=sNFd43cEL64", "_blank");
	}

	return(
		<>
			<div className='members-banner-container'>
				<div className='members-outer2'>
					<div className='members-header-container'>
						<p>CIBS CONNECT</p>
					</div>
					<div className='thinLine'></div>
					<div className='members-minor-container'>
						<p>
							CIBS Connect is a brand-new interview series which will give all students a deeper understanding of the world of finance straight from industry experts. Episodes will cover a wide range of topics, including application tips, insights into diversity & inclusion, experiences within finance, and many more.
						</p>
					</div>

					<div className='resources-list-outer'>
						<div className='resources-list-header'>CIBS Connect Episodes</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={connect_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									#1 Matthew Coakes, RBC MD
								</div>
								<div className='events-box-text-body-container'>
									Our first interview is with Matthew Coakes, Managing Director at Royal Bank of Canada (RBC) Capital Markets. Matthew studied Engineering at the University of Cambridge, and discusses why he entered the investment banking industry, managing stress on the job, and his career trajectory. He also discusses the focus on both renewables and non-renewables at RBC, as well as supporting businesses to make the transition to more sustainable energy sources.
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container' onClick={clickResource1}>
										Watch now
									</div>
								</div>
							</div>
						</div>

						<div className='resources-box-container'>
							<div className='image-events-outer-container'>
								<Image
									src={connect_img}
									style={{objectFit: 'cover'}}
									fill={true}
									alt="initiatives pic"
								/>
							</div>

							<div className='events-box-text-outer-container'>
								<div className='events-box-text-header-container'>
									#2 Christopher Lipscomb, Morgan Stanley MD
								</div>
								<div className='events-box-text-body-container'>
									Next, we chat with Christopher Lipscomb, Managing Director at Morgan Stanley. Christopher studied Philosophy at the University of Cambridge, before pivoting to the investment banking industry. In this episode of CIBS Connect, he discusses how skills gained through his degree were applicable to IB, what the atmosphere is like at work, and how he spends his spare time.
								</div>
								<div className='events-box-text-button-outer-container'>
									<div className='events-box-text-button-container' onClick={clickResource2}>
										Watch now
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

export default function MembersArea() {
	const [currentSelection, setCurrentSelection] = useState(0);
	const [ravenUser, setRavenUser] = useState(null);
	const [dbUser, setDbUser] = useState(null);
	const [failedState, setFailedState] = useState(false);

	const [crsid, setCrsid] = useState('');
	const [buttonText, setButtonText] = useState('Access');

	const selectionChange = (id) => {
        setCurrentSelection(id);
    }

	const handleSign = () => {
		trySampleRequest();
	}

	const handleCrsidChange = (e) => {
        const val = e.target.value;
        setCrsid(val);
    };

	const ResetButton = () => {
		setButtonText('Access');
	}

	const handleAccessRequest = async (event) => {
		event.preventDefault();
		setButtonText('Loading...');

		try {
			const user = await getUser(crsid);
			
			console.log(user['crsid']);
			window.localStorage.setItem(
				'rememberUserAccess', JSON.stringify(user['crsid'])
			);
			setDbUser(user['crsid']);
			ResetButton();
			
		} catch (exception) {
			console.log("failed");
			setFailedState(true);
			ResetButton();
		}
	}

	const YOUR_CLIENT_ID = '346406713027-mouebsme7n9lacl8s4bcl9inpdg1489v.apps.googleusercontent.com';
	const YOUR_REDIRECT_URI = 'https://cibs-website-oskari83.vercel.app/members';

	function trySampleRequest() {
		var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
		if (params && params['access_token']) {
			console.log("user exists")

			setRavenUser(params['access_token']);
			/*
			var xhr = new XMLHttpRequest();
			xhr.open('GET',
				'https://oauth2.googleapis.com/token' +
				'access_token=' + params['access_token']);
			xhr.onreadystatechange = function (e) {
				if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.response);
				} else if (xhr.readyState === 4 && xhr.status === 401) {
				// Token invalid, so prompt for user permission.
					oauth2SignIn();
				}
			};
			xhr.send(null);
			*/
		} else {
			console.log("user does not exist")
			oauth2SignIn();
		}
	}

	function oauth2SignIn() {
		// Google's OAuth 2.0 endpoint for requesting an access token
		var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth?hd=cam.ac.uk';
	
		// Create element to open OAuth 2.0 endpoint in new window.
		var form = document.createElement('form');
		form.setAttribute('method', 'GET'); // Send as a GET request.
		form.setAttribute('action', oauth2Endpoint);
	
		// Parameters to pass to OAuth 2.0 endpoint.
		var params = {'client_id': YOUR_CLIENT_ID,
					  'redirect_uri': YOUR_REDIRECT_URI,
					  'scope': 'email',
					  'state': 'try_sample_request',
					  'include_granted_scopes': 'true',
					  'response_type': 'token'};
	
		// Add form parameters as hidden input values.
		for (var p in params) {
		  var input = document.createElement('input');
		  input.setAttribute('type', 'hidden');
		  input.setAttribute('name', p);
		  input.setAttribute('value', params[p]);
		  form.appendChild(input);
		}
	
		// Add form to page and submit it to open the OAuth 2.0 endpoint.
		document.body.appendChild(form);
		form.submit();
	}

	async function getUser(uid) {
		const record = await pb.collection('users').getFirstListItem(`crsid="${uid}"`, {
			expand: 'relField1,relField2.subRelField',
		});
		return record;
	}

	useEffect(() => {
		const currentUrl = window.location.href; 
		const fragmentString = currentUrl;

		// Parse query string to see if page request is coming from OAuth 2.0 server.
		var params = {};
		var regex = /([^&=]+)=([^&]*)/g, m;
		while (m = regex.exec(fragmentString)) {
			params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}

		if (Object.keys(params).length > 0) {
			localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
			setRavenUser(params['access_token']);
			/*
			if (params['state'] && params['state'] == 'try_sample_request') {
				trySampleRequest();
			}
			*/
		}

		trySampleRequest();
	}, []);

	if(ravenUser===null){
		return(
			<>
			<div className='members-banner-container'>
				<div className='members-outer2'>
					<div className='raven-login-container-outer'>
						<div className='raven-login-button'>
							Loading...
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}

	if(ravenUser!==null && failedState===true){
		return(
			<>
			<div className='members-banner-container'>
				<div className='members-outer2'>
					<div className='raven-login-container-outer'>
						<div className='oops-text-container'>Oops...</div>
						<div className='login-failed-text-container'>Looks like you are not a member. Join us now to access member exclusive resources.</div>
						<JoinButton3 />
					</div>
				</div>
			</div>
			</>
		)
	}

	if(ravenUser!==null && dbUser===null){
		return(
			<>
			<div className='members-banner-container'>
				<div className='members-outer2'>
					<div className='raven-login-container-outer'>

					<form onSubmit={handleAccessRequest} className='form-container-members'>

						<div className='crsidInput-text-container'>Crsid (without @cam.ac.uk)</div>
						<div className='crsidInput-container'>
							<input 
								type="text" 
								value={crsid} 
								className='crsidInput'  
								placeholder=""
								onChange={handleCrsidChange}
							></input>
						</div>

						<button className='raven-login-button2' type='submit'>{buttonText}</button>
					</form>

					</div>
				</div>
			</div>
			</>
		)
	}

	return (
		<>
			<div className='members-navbar'>
				<div className='members-navbar-inner'>
					<div className='members-navbarlinks-outer-container'>
						<div className='members-navbar-link' onClick={() => selectionChange(0)}>Overview</div>
						<div className='members-navbar-link' onClick={() => selectionChange(1)}>Resources</div>
						<div className='members-navbar-link' onClick={() => selectionChange(2)}>CIBS Connect</div>
					</div>
				</div>
			</div>
			{currentSelection===0 && <MembersOverview selectionFunc={selectionChange}/>}
			{currentSelection===1 && <MembersResources />}
			{currentSelection===2 && <MembersCibsConnect />}

		</>
	)
}