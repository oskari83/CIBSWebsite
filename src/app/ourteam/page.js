import Image from 'next/image'
import './ourteam.css'

import CommitteeBoxes from '@/components/committeeBoxes'

//ambassador photos
import alan2_img from '../../../public/resources/ambassadors/alan2.jpg'
import arindam2_img from '../../../public/resources/ambassadors/arindam2.jpg'
import avneet2_img from '../../../public/resources/ambassadors/avneet2.png'
import ayushmannath2_img from '../../../public/resources/ambassadors/ayushmannath2.png'
import cherry2_img from '../../../public/resources/ambassadors/cherry2.JPG'
import divy2_img from '../../../public/resources/ambassadors/divy2.png'
import edric2_img from '../../../public/resources/ambassadors/edric2.jpeg'
import kenneth2_img from '../../../public/resources/ambassadors/kenneth2.jpg'
import muhammad2_img from '../../../public/resources/ambassadors/muhammad2.jpg'
import olivia2_img from '../../../public/resources/ambassadors/olivia2.png'
import tom2_img from '../../../public/resources/ambassadors/tom2.png'
import vimal2_img from '../../../public/resources/ambassadors/vimal2.jpg'

export default function Page(){

	return(
		<>
		<div className='fifth-banner-container'>
			<div className='committee-outer'>
				<div className='committee-header-container'>
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
										src={ayushmannath2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Ayushman Nath</p>
								<p className="am-text-college">Churchill College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={vimal2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Vimal Kamath</p>
								<p className="am-text-college">Trinity College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={cherry2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Cherry Yang</p>
								<p className="am-text-college">Girton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={avneet2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Avneet Sekhon</p>
								<p className="am-text-college">Corpus Christi College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={tom2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Tom Beales</p>
								<p className="am-text-college">Magdalene College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={divy2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Divy Dayal</p>
								<p className="am-text-college">Trinity College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={kenneth2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Kenneth Weng</p>
								<p className="am-text-college">Christ's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={muhammad2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Muhammad Khalil</p>
								<p className="am-text-college">Homerton College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={olivia2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Olivia Moynihan</p>
								<p className="am-text-college">Christ's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={alan2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Alan Tan</p>
								<p className="am-text-college">St Edmund's College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={edric2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Edric Wong</p>
								<p className="am-text-college">Peterhouse College</p>
							</div>
						</div>
					</div>

					<div className="responsive-am-block">
						<div className="am-card-empty">
							<div className="am-card-wrapper">
								<div className='am-image-outer-container'>
									<Image
										src={arindam2_img}
										style={{objectFit: 'cover'}}
										fill={true}
										alt="alan pic"
									/>
								</div>
							</div>
							<div className="am-content">
								<p className="am-text-name">Arindam Singh</p>
								<p className="am-text-college">Selwyn College</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}