'use client'
import './committeeBoxes.css'
import Image from 'next/image'
import { EmailIcon } from 'next-share'

//committee photos
import vanessa_img from '../../public/resources/committee/Vanessa-min.JPG'
import juhyun_img from '../../public/resources/committee/Juhyun-min.JPG'
import matthew_img from '../../public/resources/committee/Matthew-min.jpg'
import divy_img from '../../public/resources/committee/Divy-min.JPG'
import olivia_img from '../../public/resources/committee/Olivia-min.JPG'
import amir_img from '../../public/resources/committee/Amir-min.JPG'
import amrita_img from '../../public/resources/committee/Amrita-min.JPG'
import evelyn_img from '../../public/resources/committee/Evelyn-min.JPG'
import jennia_img from '../../public/resources/committee/Jennia-min.JPG'
import oskari_img from '../../public/resources/committee/Oskari-min.JPG'
import kenneth_img from '../../public/resources/committee/Kenneth-min.JPG'
import vimal_img from '../../public/resources/committee/Vimal-min.JPG'
import anson_img from '../../public/resources/committee/Anson-min.JPG'
import alan_img from '../../public/resources/committee/Alan-min.jpg'
import richard_img from '../../public/resources/committee/Shen-min.JPG'
import mariska_img from '../../public/resources/committee/mariska.jpeg'

export default function CommitteeBoxes() {

	const clickVanessaEmail = () => {
		window.open("mailto:vanessa@cibsoc.co.uk", "_blank");
	}

	const clickJuhyunEmail = () => {
		window.open("mailto:juhyun@cibsoc.co.uk", "_blank");
	}

	const clickMatthewEmail = () => {
		window.open("mailto:matthew@cibsoc.co.uk", "_blank");
	}

	const clickDivyEmail = () => {
		window.open("mailto:divy@cibsoc.co.uk", "_blank");
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
							src={vanessa_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="vanessa pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickVanessaEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Vanessa Chen</div>
						<div className='committee-text-role'>President</div>
						<div className='committee-text-college'>Gonville and Caius College</div>
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
							<p className='committee-text-right-pos'>Vanessa, Matthew and Juhyun</p>
							<p className='committee-text-right-pos'>CIBS Presidents 2023-24</p>
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickJuhyunEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickMatthewEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickDivyEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Olivia Moynihan</div>
						<div className='committee-text-role'>Events Executive Director</div>
						<div className='committee-text-college'>Christ's College</div>
					</div>
				</div>

				<div className='committee-box'>
					<div className='committee-box-image-container'>
						<Image
							src={mariska_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="mariska pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Mariska Yazbeck</div>
						<div className='committee-text-role'>Events Officer</div>
						<div className='committee-text-college'>Trinity College</div>
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

					<div className='hide hover-email'>
						<div onClick={clickEventsEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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
							alt="jennia pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickPublicityEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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
							src={kenneth_img}
							style={{objectFit: 'cover'}}
							fill={true}
							alt="kenneth pic"
						/>
					</div>

					<div className='hide hover-email'>
						<div onClick={clickSponsorshipEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickVimalEmail} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
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

					<div className='hide hover-email'>
						<div onClick={clickResearchGroup} className='email-button-container'>
							<EmailIcon size={48} round />
						</div>
					</div>

					<div className='committee-box-text-container'>
						<div className='committee-text-name'>Shen (Richard) Lin</div>
						<div className='committee-text-role'>Research Group Director</div>
						<div className='committee-text-college'>Trinity College</div>
					</div>
				</div>

			</div>
		</>
	)
}