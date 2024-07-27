import Image from 'next/image'
import './ourteam.css'

import CommitteeBoxes from '@/components/committeeBoxes'

import cibsBackground_img from '../../../public/resources/kingscollege3.jpg'

//ambassador photos
import AlishaK_img from '../../../public/resources/ambassadors/AlishaK.png'
import DamsithW_img from '../../../public/resources/ambassadors/DamsithW.png'
import JihengL_img from '../../../public/resources/ambassadors/JihengL.png'
import VadimR_img from '../../../public/resources/ambassadors/VadimR.png'
import AngelaC_img from '../../../public/resources/ambassadors/AngelaC.png'

import NicholasK_img from '../../../public/resources/ambassadors/NicholasK.png'
import BlakeH_img from '../../../public/resources/ambassadors/BlakeH.png'
import MontyM_img from '../../../public/resources/ambassadors/MontyM.png'
import NinaF_img from '../../../public/resources/ambassadors/NinaF.png'
import CallumO_img from '../../../public/resources/ambassadors/CallumO.png'

import ToksO_img from '../../../public/resources/ambassadors/ToksO.png'
import tobyL_img from '../../../public/resources/ambassadors/tobyL.png'
import JessicaL_img from '../../../public/resources/ambassadors/JessicaL.png'
import ShivanshP_img from '../../../public/resources/ambassadors/ShivanshP.png'
import AdelynW_img from '../../../public/resources/ambassadors/AdelynW.png'

import FremontP_img from '../../../public/resources/ambassadors/FremontP.png'
import MaahiP_img from '../../../public/resources/ambassadors/MaahiP.png'
import YoungokB_img from '../../../public/resources/ambassadors/YoungokB.png'
import AbirM_img from '../../../public/resources/ambassadors/AbirM.png'
import YoungL_img from '../../../public/resources/ambassadors/YoungL.png'

import JennyZ_img from '../../../public/resources/ambassadors/JennyZ.png'
import KaijiaZ_img from '../../../public/resources/ambassadors/KaijiaZ.png'
import CormacH_img from '../../../public/resources/ambassadors/CormacH.png'
import RenanD_img from '../../../public/resources/ambassadors/RenanD.png'
import GeorgeR_img from '../../../public/resources/ambassadors/GeorgeR.png'

import JudyJ_img from '../../../public/resources/ambassadors/JudyJ.png'
import KokiS_img from '../../../public/resources/ambassadors/KokiS.png'
import JoonC_img from '../../../public/resources/ambassadors/JoonC.png'
import SiqiY_img from '../../../public/resources/ambassadors/SiqiY.png'
import YinbangL_img from '../../../public/resources/ambassadors/YinbangL.png'
import JamesK_img from '../../../public/resources/ambassadors/JamesK.png'

export default function Page(){

	return(
		<>
		<div className='small-top-banner-container'>
			<Image
				src={cibsBackground_img}
				style={{objectFit: 'cover'}}
				fill={true}
				alt="background image"
				priority
			/>
			<div className='small-top-outer'>
				<div className='small-top-banner-text-outer'>
					<p>Committee & Ambassadors</p>
				</div>
			</div>
		</div>

		<div className='fifth-banner-container'>
			<div className='committee-outer'>
				<div className='committee-header-container'>
					<p>COMMITTEE</p>
				</div>
				<div className='thinLine'></div>
				<div className='committee-message-container'>
					<div className='committee-message-container-header'>A warm welcome from our committee!</div>
					<div className='space-10px'></div>
					<p>Welcome to CIBS! We are so excited to lead Cambridge Investment Banking Society this year. We aim to connect Cambridge students with opportunities within the financial services industry and help equip them with the skills necessary to succeed within finance. Make sure to join us and we look forward to seeing you at our events!</p>
					<div className='space-10px'></div>
					<p className='committee-text-right-pos'>Vanessa, Matthew and Juhyun</p>
					<p className='committee-text-right-pos'>CIBS Presidents 2023-24</p>
				</div>

				<CommitteeBoxes />
			</div>
		</div>

		<div className='seventh-banner-container'>
			<div className='ambassadors-outer'>
				<div className='sponsors-header-container'>
					<p>AMBASSADORS</p>
				</div>
				<div className='thinLine'></div>

				<div className='ambassador-boxes-outer'>
					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={YinbangL_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="yinbang pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Yinbang Lan</p>
								<p className="am-text-college">Selwyn College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={SiqiY_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Siqi Yue pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Siqi Yue</p>
								<p className="am-text-college">Christ's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JamesK_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="James Koch pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">James Koch</p>
								<p className="am-text-college">Christ's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JoonC_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Hyungjoon Chung pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Hyungjoon Chung</p>
								<p className="am-text-college">St Edmund's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={KokiS_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Koki Shimamune pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Koki Shimamune</p>
								<p className="am-text-college">St John's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JudyJ_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Judy Jiang pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Judy Jiang</p>
								<p className="am-text-college">Homerton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={GeorgeR_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="George Rudman pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">George Rudman</p>
								<p className="am-text-college">Trinity College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={RenanD_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Renan Dennig pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Renan Dennig</p>
								<p className="am-text-college">St Edmund's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={CormacH_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Cormac Hoare pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Cormac Hoare</p>
								<p className="am-text-college">Churchill College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={KaijiaZ_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Kaijia Zhang pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Kaijia Zhang</p>
								<p className="am-text-college">Girton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JennyZ_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Jenny Zhan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Jenny Zhan</p>
								<p className="am-text-college">Trinity Hall</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={YoungL_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Young Kai Lee pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Young Kai Lee</p>
								<p className="am-text-college">Homerton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={AbirM_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Abir Mohammed pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Abir Mohammed</p>
								<p className="am-text-college">Sidney Sussex College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={YoungokB_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Baek Youngok pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Baek Youngok</p>
								<p className="am-text-college">Magdalene College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={MaahiP_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Maahi Pathak pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Maahi Pathak</p>
								<p className="am-text-college">Murray Edwards College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={FremontP_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Fremont Phua pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Fremont Phua</p>
								<p className="am-text-college">Trinity Hall</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={AdelynW_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Adelyn Wu pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Adelyn Wu</p>
								<p className="am-text-college">Hughes Hall</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={ShivanshP_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Shivansh Pandey pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Shivansh Pandey</p>
								<p className="am-text-college">Gonville and Caius College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JessicaL_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Xuan Jia (Jessica) Liu pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Xuan Jia (Jessica) Liu</p>
								<p className="am-text-college">Clare College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={tobyL_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Toby Linsell pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Toby Linsell</p>
								<p className="am-text-college">Homerton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={ToksO_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Olatokunbo Oyewole pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Olatokunbo Oyewole</p>
								<p className="am-text-college">Sidney Sussex College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={CallumO_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Callum O’Kane pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Callum O'Kane</p>
								<p className="am-text-college">Girton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={NinaF_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Nina Fortikova pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Nina Fortikova</p>
								<p className="am-text-college">Newnham College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={MontyM_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Monty Marsh pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Monty Marsh</p>
								<p className="am-text-college">Lucy Cavendish College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={BlakeH_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Blake Hanson pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Blake Hanson</p>
								<p className="am-text-college">Clare College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={NicholasK_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Nicholas Koh pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Nicholas Koh</p>
								<p className="am-text-college">Trinity College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={AngelaC_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Angela Chen pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Angela Chen</p>
								<p className="am-text-college">Trinity College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={VadimR_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Vadim Rikunov pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Vadim Rikunov</p>
								<p className="am-text-college">Girton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={JihengL_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="JiHeng Li pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">JiHeng Li</p>
								<p className="am-text-college">Magdalene College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={DamsithW_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Damsith Wimalasena pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Damsith Wimalasena</p>
								<p className="am-text-college">Lucy Cavendish College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={AlishaK_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="Alisha Kinvig pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Alisha Kinvig</p>
								<p className="am-text-college">Homerton College</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}