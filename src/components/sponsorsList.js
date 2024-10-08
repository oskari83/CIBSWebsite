'use client'

import Image from 'next/image'
import './sponsorsList.css'

//sponsors photos
import houlihan_img from '../../public/resources/sponsors/Houlihan_logo.png'
import appian_img from '../../public/resources/sponsors/appian_logo.png'
import jefferies_img from '../../public/resources/sponsors/jefferies.png'
import nomura_img from '../../public/resources/sponsors/nomura.png'
import evercore_img from '../../public/resources/sponsors/evercore_logo.png'
import socgen_img from '../../public/resources/sponsors/socgen_logo.png'
import rothesay_img from '../../public/resources/sponsors/rothesay_logo.png'
import fe_img from '../../public/resources/sponsors/fe_logo.png'
import ubs_img from '../../public/resources/sponsors/UBS_logo.png'
import apollo_img from '../../public/resources/sponsors/Apollo_logo.png'
import pjt_img from '../../public/resources/sponsors/PJT_logo.png'

import { useRouter } from 'next/navigation'

export default function SponsorsList() {
	const router = useRouter();

	const clickEvercore = () => {
		window.open("https://www.evercore.com/", "_blank");
	}

	const clickJefferies = () => {
		window.open("https://www.jefferies.com/", "_blank");
	}

	const clickSocgen = () => {
		window.open("https://www.societegenerale.com/en", "_blank");
	}

	const clickFe = () => {
		window.open("https://www.fe.training/", "_blank");
	}

	const clickNomura = () => {
		window.open("https://www.nomura.com/", "_blank");
	}

	const clickRothesay = () => {
		window.open("https://www.rothesay.com/", "_blank");
	}

	const clickAppian = () => {
		window.open("https://appiancapitaladvisory.com/", "_blank");
	}

	const clickUBS = () => {
		window.open("https://www.ubs.com/uk/en.html", "_blank");
	}

	const clickApollo = () => {
		window.open("https://www.apollo.com/", "_blank");
	}

	const clickPJT = () => {
		window.open("https://www.pjtpartners.com/", "_blank");
	}

	const clickHoulihan = () => {
		window.open("https://hl.com/", "_blank");
	}

	return (
		<>

		<div className='gold-sponsors-name'>Gold Sponsors</div>
		<div className='thinLine'></div>

		<div className='sponsors-box-outer-gold'>
			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickEvercore}>
					<Image
						src={evercore_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="dragon pic"
					/>
				</div>
				<div className='sponsor-text2'>
					Evercore is a premier global independent investment banking advisory firm dedicated to helping clients achieve superior results through trusted independent and innovative advice on matters of strategic significance.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image-appian' onClick={clickHoulihan}>
					<Image
						src={houlihan_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="houlihan pic"
					/>
				</div>
				<div className='sponsor-text2'>
					Houlihan Lokey is a leading global investment bank with expertise in mergers and acquisitions, capital markets, financial restructuring, and financial and valuation advisory.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image-appian' onClick={clickAppian}>
					<Image
						src={appian_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="appian pic"
					/>
				</div>
				<div className='sponsor-text2'>
					Appian Capital Advisory is a long-term value investor focused on mining assets and management teams across select geographies and commodities.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickSocgen}>
					<Image
						src={socgen_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="socgen pic"
					/>
				</div>
				<div className='sponsor-text'>
					Societe Generale is a European leader in financial services with investment banking expertise across Debt and Equity Financing, Ratings, and Market Risk and Structuring.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image-fe' onClick={clickFe}>
					<Image
						src={fe_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="fe pic"
					/>
				</div>
				<div className='sponsor-text'>
					Financial Edge is Wall Street's #1 training provider offering certified online courses from expert instructors.
				</div>
			</div>
		</div>

		<div className='silver-sponsors-name'>Silver Sponsors</div>
		<div className='thinLine'></div>

		<div className='sponsors-box-outer-silver'>
			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickJefferies}>
					<Image
						src={jefferies_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="jefferies pic"
					/>
				</div>
				<div className='sponsor-text'>
					Jefferies is a diversified financial services company, a global leader in investment banking, and the largest independent, global, full-service IB firm in the US.
				</div>
			</div>
		</div>

		<div className='bronze-sponsors-name'>Bronze Sponsors</div>
		<div className='thinLine'></div>

		<div className='sponsors-box-outer-bronze'>

			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickUBS}>
					<Image
						src={ubs_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="UBS pic"
					/>
				</div>
				<div className='sponsor-text'>
					UBS is a multinational investment bank and financial services company with a presence in all the major financial centers and over 50 countries worldwide.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickPJT}>
					<Image
						src={pjt_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="PJT pic"
					/>
				</div>
				<div className='sponsor-text'>
					PJT Partners is a premier, global, advisory-focused investment bank that was built from the ground up to be different. Their highly experienced, collaborative teams provide independent advice coupled with old-world, high-touch client service.
				</div>
			</div>

		</div>

		</>
	)
}