'use client'
import './committeeBoxes.css'
import Image from 'next/image'
import { EmailIcon } from 'next-share'

//committee photos
import blake from '../../public/resources/committee/Blake.jpg'
import oskari from '../../public/resources/committee/Oskari.jpg'
import kenneth from '../../public/resources/committee/Kenneth.jpg'
import siqi from '../../public/resources/committee/Siqi.jpg'
import ranvitha from '../../public/resources/committee/Raanvitha.jpg'
import edric from '../../public/resources/committee/Edric.jpg'
import simon from '../../public/resources/committee/polish.jpg'
import nicholas from '../../public/resources/committee/Vincent.jpg'
import jihoon from '../../public/resources/committee/Jihoon.jpg'

import amanda from '../../public/resources/committee/Amanda.jpg'
import ahmed from '../../public/resources/committee/Ahmed.jpg'
import eidyn from '../../public/resources/committee/Eidyn.jpg'
import rahul from '../../public/resources/committee/Rahul.jpg'
import rohan from '../../public/resources/committee/Rohan.jpg'
import monty from '../../public/resources/committee/Monty.jpg'
import elena from '../../public/resources/committee/Elena.jpg'
import shirley from '../../public/resources/committee/Shirley.jpg'
import youngkai from '../../public/resources/committee/YoungKai.jpg'
import youngok from '../../public/resources/committee/Youngok.jpg'
import jessica from '../../public/resources/committee/Jessica.jpg'

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
							src={kenneth}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="kenneth pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVanessaEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Kenneth Weng</div>
						<div className='committee-text-role'>President</div>
						<div className='committee-text-college'>Christ's College</div>
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
							<p className='committee-text-right-pos'>Kenneth, Rahul and Nicholas</p>
							<p className='committee-text-right-pos'>CIBS Presidents 2024-25</p>
						</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={rahul}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="rahul pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickJuhyunEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Rahul Doshi</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Clare College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={nicholas}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="nicholas pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickMatthewEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Nicholas Koh</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

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
						<div onClick={clickDivyEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Eidyn Pottinga</div>
						<div className='committee-text-role'>Treasurer</div>
						<div className='committee-text-college'>Robinson College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={youngok}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="youngok pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickDivyEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Youngok Baek</div>
						<div className='committee-text-role'>Secretary</div>
						<div className='committee-text-college'>Magdalene College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={ranvitha}
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
						<div className='committee-text-name'>Ranvitha Chaparala</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Churchill College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={ahmed}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="ahmed pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Ahmed Ibrahim</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Sidney Sussex College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={monty}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="monty pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Monty Marsh</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Lucy Cavendish College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={jessica}
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
						<div className='committee-text-name'>Jessica Liu</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Clare College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={siqi}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="siqi pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Siqi Yue</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={jihoon}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="jihoon pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Jihoon Lee</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Hughes Hall</div>
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
							src={blake}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="blake pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVimalEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Blake Hanson</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Clare College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={amanda}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="amanda pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVimalEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Amanda Lai</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>St John's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={elena}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="elena pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Elena Zheng</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={rohan}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="rohan pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Rohan Kumar</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Magdalene College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={shirley}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="shirley pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Shirley Sun</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Murray Edwards College</div>
					</div>
				</div>

				

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={youngkai}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="young pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Young Kai Lee</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Homerton College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={edric}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="edric pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Edric Wong</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Selwyn College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={simon}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="simon pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Szymon Florek</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Trinity College</div>
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