import Image from 'next/image'
import Link from 'next/link'
import './ourteam.css'

//committee photos
import vanessa_img from '../../../resources/committee/Vanessa-min.JPG'
import juhyun_img from '../../../resources/committee/Juhyun-min.JPG'
import matthew_img from '../../../resources/committee/Matthew-min.JPG'
import divy_img from '../../../resources/committee/Divy-min.JPG'
import olivia_img from '../../../resources/committee/Olivia-min.JPG'
import amir_img from '../../../resources/committee/Amir-min.JPG'
import amrita_img from '../../../resources/committee/Amrita-min.JPG'
import evelyn_img from '../../../resources/committee/Evelyn-min.JPG'
import jennia_img from '../../../resources/committee/Jennia-min.JPG'
import oskari_img from '../../../resources/committee/Oskari-min.JPG'
import kenneth_img from '../../../resources/committee/Kenneth-min.JPG'
import vimal_img from '../../../resources/committee/Vimal-min.JPG'
import anson_img from '../../../resources/committee/Anson-min.JPG'
import alan_img from '../../../resources/committee/Alan-min.JPG'
import richard_img from '../../../resources/committee/Shen-min.JPG'

//ambassador photos
import alan2_img from '../../../resources/ambassadors/alan2.jpg'
import arindam2_img from '../../../resources/ambassadors/arindam2.jpg'
import avneet2_img from '../../../resources/ambassadors/avneet2.png'
import ayushmannath2_img from '../../../resources/ambassadors/ayushmannath2.png'
import cherry2_img from '../../../resources/ambassadors/cherry2.JPG'
import divy2_img from '../../../resources/ambassadors/divy2.png'
import edric2_img from '../../../resources/ambassadors/edric2.jpeg'
import kenneth2_img from '../../../resources/ambassadors/kenneth2.jpg'
import muhammad2_img from '../../../resources/ambassadors/muhammad2.jpg'
import olivia2_img from '../../../resources/ambassadors/olivia2.png'
import tom2_img from '../../../resources/ambassadors/tom2.png'
import vimal2_img from '../../../resources/ambassadors/vimal2.jpg'

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
						<div className='committee-box-text-container'>
							<div className='committee-text-name'>Vanessa Chen</div>
							<div className='committee-text-role'>President</div>
							<div className='committee-text-college'>Gonville and Caius College</div>
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
						<div className='committee-box-text-container'>
							<div className='committee-text-name'>Olivia Moynihan</div>
							<div className='committee-text-role'>Events Officer</div>
							<div className='committee-text-college'>Christ's College</div>
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
								alt="vanessa pic"
							/>
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
						<div className='committee-box-text-container'>
							<div className='committee-text-name'>Richard Lin</div>
							<div className='committee-text-role'>Research Group Director</div>
							<div className='committee-text-college'>Trinity College</div>
						</div>
					</div>

				</div>
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