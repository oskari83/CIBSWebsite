'use client'
import './committeeBoxes.css'
import Image from 'next/image'
import { EmailIcon } from 'next-share'

//committee photos
import oskari from '../../public/resources/newCommittee/Oskari.jpeg'
import eidyn from '../../public/resources/newCommittee/Eidyn.jpeg'
import fremont from '../../public/resources/newCommittee/Fremont.jpeg'
import daniel from '../../public/resources/newCommittee/Daniel.jpeg'

import iroo from '../../public/resources/newCommittee/Iroo.jpeg'
import zhen from '../../public/resources/newCommittee/Zhen.jpeg'
import prarthana from '../../public/resources/newCommittee/Prarthana.jpeg'

import abby from '../../public/resources/newCommittee/Abby.jpeg'
import blank from '../../public/resources/newCommittee/blank.jpg'
import lillie from '../../public/resources/newCommittee/Lillie.jpeg'
import joseph from '../../public/resources/newCommittee/Joseph.jpeg'
import isaac from '../../public/resources/newCommittee/Isaac.jpeg'
import alex from '../../public/resources/newCommittee/Alex.jpeg'
import mulan from '../../public/resources/newCommittee/Mulan.jpeg'

export default function CommitteeBoxes() {

	const clickVanessaEmail = () => {
		window.open("mailto:kenneth@cibsoc.co.uk", "_blank");
	}

	const clickJuhyunEmail = () => {
		window.open("mailto:rahul@cibsoc.co.uk", "_blank");
	}

	const clickMatthewEmail = () => {
		window.open("mailto:nicholas@cibsoc.co.uk", "_blank");
	}

	const clickDivyEmail = () => {
		window.open("mailto:eidyn@cibsoc.co.uk", "_blank");
	}

	const clickEventsEmail = () => {
		window.open("mailto:events@cibsoc.co.uk", "_blank");
	}

	const clickPublicityEmail = () => {
		window.open("mailto:publicity@cibsoc.co.uk", "_blank");
	}

	const clickTechEmail = () => {
		window.open("mailto:tech@cibsoc.co.uk", "_blank");
	}

	const clickSponsorshipEmail = () => {
		window.open("mailto:sponsorship@cibsoc.co.uk", "_blank");
	}

	const clickVimalEmail = () => {
		window.open("mailto:vimal@cibsoc.co.uk", "_blank");
	}

	const clickResearchGroup = () => {
		window.open("mailto:researchgroup@cibsoc.co.uk", "_blank");
	}

	return (
		<>
			<div className='committee-boxes-outer'>

				<div className='committee-box'>
					
					<div className='committee-box-image-container'>
						<Image
							src={eidyn}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="eidyn pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVanessaEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Eidyn Pottinga</div>
						<div className='committee-text-role'>President</div>
						<div className='committee-text-college'>Robinson College</div>
					</div>
				</div>

				<div className='committee-box-t'>
					<div className='committee-box-text-container-t'>
						<div className='committee-message-container-t'>
							<div className='space-10px'></div>
							<p>A warm welcome from our committee!</p>
							<div className='space-10px'></div>
							<p>Welcome to CIBS! We are so excited to lead Cambridge Investment Banking Society this year. We aim to connect Cambridge students with opportunities within the financial services industry and help equip them with the skills necessary to succeed within finance. Make sure to join us and we look forward to seeing you at our events!</p>
							<div className='space-10px'></div>
							<p className='committee-text-right-pos'>Eidyn, Fremont and Daniel</p>
							<p className='committee-text-right-pos'>CIBS Presidents 2025-26</p>
						</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={fremont}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="fremont pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickJuhyunEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Fremont Phua</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Trinity Hall</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={daniel}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="daniel pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickMatthewEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Daniel Kim</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Homerton College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={iroo}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="iroo pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickDivyEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Iroo Hong</div>
						<div className='committee-text-role'>Treasurer</div>
						<div className='committee-text-college'>Selwyn College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={zhen}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="zhen pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickDivyEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Zhen Yang Shen</div>
						<div className='committee-text-role'>Secretary</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={prarthana}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="ranvitha pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Prarthana Arora</div>
						<div className='committee-text-role'>Executive Events Director</div>
						<div className='committee-text-college'>Robinson College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={mulan}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="mulan pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Mulan Li</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Gonville and Caius College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={abby}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="abby pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Abby So</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Magdalene College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={blank}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="jessica pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Ashwin Hathiramani</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={lillie}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="lillie pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Lillie Hu</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Emmanuel College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={joseph}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="joseph pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Joseph Preddy</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>St John's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={oskari}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="oskari pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickTechEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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
							src={isaac}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="isaac pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVimalEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Isaac Yang</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Corpus Christi College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={alex}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="alex pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVimalEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Alex Barnard</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Homerton College</div>
					</div>
				</div>


				<div className='committee-box-e'>
					<div className='committee-box-image-container-e'>
						
					</div>

					<div className='committee-box-text-container-e'>
						
					</div>
				</div>

				<div className='committee-box-e'>
					<div className='committee-box-image-container-e'>
						
					</div>

					<div className='committee-box-text-container-e'>
						
					</div>
				</div>

				<div className='committee-box-e'>
					<div className='committee-box-image-container-e'>
						
					</div>

					<div className='committee-box-text-container-e'>
						
					</div>
				</div>

			</div>
		</>
	)
}