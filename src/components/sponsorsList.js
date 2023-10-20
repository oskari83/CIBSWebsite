'use client'

import Image from 'next/image'
import './sponsorsList.css'

//sponsors photos
import dragon_img from '../../public/resources/sponsors/dragonfly.png'
import wq_img from '../../public/resources/sponsors/worldquant_logo.png'
import appian_img from '../../public/resources/sponsors/appian_logo.png'
import jefferies_img from '../../public/resources/sponsors/jefferies.png'
import nomura_img from '../../public/resources/sponsors/nomura.png'
import evercore_img from '../../public/resources/sponsors/evercore_logo.png'
import man_img from '../../public/resources/sponsors/man_logo.png'
import socgen_img from '../../public/resources/sponsors/socgen_logo.png'
import rothesay_img from '../../public/resources/sponsors/rothesay_logo.png'
import fe_img from '../../public/resources/sponsors/fe_logo.png'

import { useRouter } from 'next/navigation'

export default function SponsorsList() {
	const router = useRouter();

	const clickEvercore = () => {
		window.open("https://www.evercore.com/", "_blank");
	}

	const clickMan = () => {
		window.open("https://www.man.com/", "_blank");
	}

	const clickDragon = () => {
		window.open("https://dragonflyassetmgmt.com/", "_blank");
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

	const clickWq = () => {
		window.open("https://www.worldquant.com/", "_blank");
	}

	const clickAppian = () => {
		window.open("https://appiancapitaladvisory.com/", "_blank");
	}

	return (
		<>
		<div className='platinum-sponsors-name'>Platinum Sponsors</div>
		<div className='thinLine'></div>
		<div className='sponsors-box-outer-platinum'>
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

		</div>

		<div className='gold-sponsors-name'>Gold Sponsors</div>
		<div className='thinLine'></div>

		<div className='sponsors-box-outer-gold'>

			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickMan}>
					<Image
						src={man_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="man pic"
					/>
				</div>
				<div className='sponsor-text2'>
					Man Group is an active investment management firm focused on delivering attractive performance and client portfolio solutions, deploying the latest technology across business to stay at the forefront of industry.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image' onClick={clickWq}>
					<Image
						src={wq_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="wq pic"
					/>
				</div>
				<div className='sponsor-text2'>
					WorldQuant is a global quantitative asset management firm with over $7 billion in assets under management.
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
				<div className='sponsor-image-dragon' onClick={clickDragon}>
					<Image
						src={dragon_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="dragon pic"
					/>
				</div>
				<div className='sponsor-text2'>
					Dragonfly invests in top blockchain digital assets, combining years of traditional investment experience with blockchain expertise to find attractive investment opportunities in the digital asset market.
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
				<div className='sponsor-image' onClick={clickNomura}>
					<Image
						src={nomura_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="flow pic"
					/>
				</div>
				<div className='sponsor-text'>
					Nomura is a leading global financial services group and investment bank with an integrated network spanning over 30 countries and regions.
				</div>
			</div>

			<div className='sponsor-box'>
				<div className='sponsor-image-rothesay' onClick={clickRothesay}>
					<Image
						src={rothesay_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="rothesay pic"
					/>
				</div>
				<div className='sponsor-text'>
					Rothesay is a leading UK pensions insurance specialist, purpose-built to protect pension schemes and their members’ pensions with over £48 billion AUM.
				</div>
			</div>

		</div>

		</>
	)
}