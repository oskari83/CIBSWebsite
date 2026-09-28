'use client'
import './committeeBoxes.css'
import Image from 'next/image'
import { EmailIcon } from 'next-share'

//committee photos
import prarthana_img from '../../public/resources/Comittee2026/Prarthana Arora Robinson President.jpg'
import archie_img from '../../public/resources/Comittee2026/Archie Rowland Sidney VP.jpg'
import chomitha_img from '../../public/resources/Comittee2026/Chomitha Aluthge Trinity VP.png'
import arnav_img from '../../public/resources/Comittee2026/Arnav Asthana - Kings - Treasurer.jpg'
import bonnie_img from '../../public/resources/Comittee2026/Bonnie Tan Selwyn Secretary_.jpg'

import jack_img from '../../public/resources/Comittee2026/Jack Edmondson-Jones - John_s - Executive Events Director.jpg'
import benedict_img from '../../public/resources/Comittee2026/Benedict Murphy - Fitz - Sponsorship Executive Director.jpg'
import aleksander_img from '../../public/resources/Comittee2026/Aleksander Volponi - Queens - Sponsorship.jpg'
import daniel_img from '../../public/resources/Comittee2026/Daniel Djakiodine - Selwyn.jpg'

import dheepti_img from '../../public/resources/Comittee2026/Dheepti Devasenapathy - Medwards.jpg'
import austin_img from '../../public/resources/Comittee2026/Austin Chen - Robinson - Publicity.jpg'
import lakshicca_img from '../../public/resources/Comittee2026/Lakshicca Balakrishnan - Lucy Cav - Publicity.jpg'
import frank_img from '../../public/resources/Comittee2026/Frank Lin - Robinson - Tech.jpg'

import shan_img from '../../public/resources/Comittee2026/Shan NS - Clare - Tech.jpg'
import ilia_img from '../../public/resources/Comittee2026/Ilia Persiani - Christ_s - Network.jpg'
import nithil_img from '../../public/resources/Comittee2026/Nithil Murugan - Wolfson - Network.png'
import veronika_img from '../../public/resources/Comittee2026/Veronika Koch - Medwards - Network.jpg'

import mikhail_img from '../../public/resources/Comittee2026/Mikhail Firas Abdul Jabbar - Queens - Executive Research Group Director.jpg'
import lorenzo_img from '../../public/resources/Comittee2026/Lorenzo Nogales - Johns - Research Group Director.jpg'
import lucas_img from '../../public/resources/Comittee2026/Lucas Goh - Pembroke - Research Group Director.jpg'

export default function CommitteeBoxes() {

	const clickPresidentsEmail = () => {
		window.open("mailto:presidents@cibsoc.co.uk", "_blank");
	}

	const clickTreasurerEmail = () => {
		window.open("mailto:treasurer@cibsoc.co.uk", "_blank");
	}

	const clickSecretaryEmail = () => {
		window.open("mailto:secretary@cibsoc.co.uk", "_blank");
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

	const clickNetworkEmail = () => {
		window.open("mailto:network@cibsoc.co.uk", "_blank");
	}

	const clickResearchGroup = () => {
		window.open("mailto:researchgroup@cibsoc.co.uk", "_blank");
	}

	return (
		<>
			<div className='committee-boxes-outer'>

				{/* Row 1: President + Welcome Box */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={prarthana_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Prarthana Arora"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPresidentsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Prarthana Arora</div>
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
							<p className='committee-text-right-pos'>Prarthana Arora</p>
							<p className='committee-text-right-pos'>CIBS President 2026-27</p>
						</div>
					</div>
				</div>

				{/* Row 2: VPs, Treasurer, Secretary */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={archie_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Archie Rowland"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPresidentsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Archie Rowland</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Sidney Sussex College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={chomitha_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Chomitha Aluthge"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPresidentsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Chomitha Aluthge</div>
						<div className='committee-text-role'>Vice President</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={arnav_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Arnav Asthana"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickTreasurerEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Arnav Asthana</div>
						<div className='committee-text-role'>Treasurer</div>
						<div className='committee-text-college'>King's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={bonnie_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Bonnie Tan"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSecretaryEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Bonnie Tan</div>
						<div className='committee-text-role'>Secretary</div>
						<div className='committee-text-college'>Selwyn College</div>
					</div>
				</div>

				{/* Row 3: Events & Sponsorship */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={jack_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Jack Edmondson-Jones"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Jack Edmondson-Jones</div>
						<div className='committee-text-role2'>Executive Events Director</div>
						<div className='committee-text-college'>St John's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={benedict_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Benedict Murphy"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Benedict Murphy</div>
						<div className='committee-text-role2'>Sponsorship Executive Director</div>
						<div className='committee-text-college'>Fitzwilliam College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={aleksander_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Aleksander Volponi"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Aleksander Volponi</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Queens' College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={daniel_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Daniel Djakiodine"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Daniel Djakiodine</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Selwyn College</div>
					</div>
				</div>

				{/* Row 4: Sponsorship, Publicity, Tech */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={dheepti_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Dheepti Devasenapathy"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Dheepti Devasenapathy</div>
						<div className='committee-text-role'>Sponsorship Officer</div>
						<div className='committee-text-college'>Murray Edwards College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={austin_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Austin Chen"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Austin Chen</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Robinson College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={lakshicca_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Lakshicca Balakrishnan"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Lakshicca Balakrishnan</div>
						<div className='committee-text-role'>Publicity Officer</div>
						<div className='committee-text-college'>Lucy Cavendish College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={frank_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Frank Lin"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickTechEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Frank Lin</div>
						<div className='committee-text-role'>Technology Officer</div>
						<div className='committee-text-college'>Robinson College</div>
					</div>
				</div>

				{/* Row 5: Tech & Network */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={shan_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Shan Nachammai Shanmuhanathan"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickTechEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Shan Nachammai Shanmuhanathan</div>
						<div className='committee-text-role'>Technology Officer</div>
						<div className='committee-text-college'>Clare College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={ilia_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Ilia Persiani"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickNetworkEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Ilia Persiani</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={nithil_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Nithil Murugan"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickNetworkEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Nithil Murugan</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Wolfson College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={veronika_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Veronika Koch"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickNetworkEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Veronika Koch</div>
						<div className='committee-text-role'>Network Officer</div>
						<div className='committee-text-college'>Murray Edwards College</div>
					</div>
				</div>

				{/* Row 6: Research Group + 1 Empty Slot to align grid */}
				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={mikhail_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Mikhail Firas Abdul Jabbar"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Mikhail Firas Abdul Jabbar</div>
						<div className='committee-text-role2'>Executive Research Group Director</div>
						<div className='committee-text-college'>Queens' College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={lorenzo_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Lorenzo Nogales"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Lorenzo Nogales</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>St John's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={lucas_img}
							style={{objectFit: 'cover'}}
							fill={true}
							sizes="(max-width: 610px) 100vw, (max-width: 850px) 50vw, 300px"
							quality={95}
							alt="Lucas Goh"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Lucas Goh</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Pembroke College</div>
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