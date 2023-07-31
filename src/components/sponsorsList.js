'use client'

import Image from 'next/image'
import './sponsorsList.css'

//sponsors photos
import credit_img from '../../resources/sponsors/creditsuisse.png'
import dragon_img from '../../resources/sponsors/dragonfly.png'
import flow_img from '../../resources/sponsors/flowtraders.png'
import houlihan_img from '../../resources/sponsors/houlihan.png'
import jefferies_img from '../../resources/sponsors/jefferies.png'
import nomura_img from '../../resources/sponsors/nomura.png'

import { useRouter } from 'next/navigation'

export default function SponsorsList() {
	const router = useRouter();

	const clickDragon = () => {
		window.open("https://dragonflyassetmgmt.com/", "_blank");
	}

	const clickJefferies = () => {
		window.open("https://www.jefferies.com/", "_blank");
	}

	const clickFlow = () => {
		window.open("https://www.flowtraders.com/", "_blank");
	}

	const clickCredit = () => {
		window.open("https://www.credit-suisse.com/ch/en.html", "_blank");
	}

	const clickNomura = () => {
		window.open("https://www.nomura.com/", "_blank");
	}

	const clickHoulihan = () => {
		window.open("https://hl.com/", "_blank");
	}

	return (
		<>
		<div className='sponsor-box'>
			<div className='sponsor-image' onClick={clickDragon}>
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
			<div className='sponsor-image' onClick={clickHoulihan}>
				<Image
					src={houlihan_img}
					style={{objectFit: 'cover'}}
					fill={true}
					alt="houlihan pic"
				/>
			</div>
			<div className='sponsor-text'>
				Houlihan Lokey is a leading global investment bank with expertise in mergers and acquisitions, capital markets, financial restructuring and valuation.
			</div>
		</div>

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

		<div className='sponsor-box'>
			<div className='sponsor-image' onClick={clickCredit}>
				<Image
					src={credit_img}
					style={{objectFit: 'cover'}}
					fill={true}
					alt="cs pic"
				/>
			</div>
			<div className='sponsor-text'>
				Credit Suisse Group is a leading financial services company, advising clients in all aspects of finance, across the globe and around the clock.
			</div>
		</div>

		<div className='sponsor-box'>
			<div className='sponsor-image' onClick={clickFlow}>
				<Image
					src={flow_img}
					style={{objectFit: 'cover'}}
					fill={true}
					alt="flow pic"
				/>
			</div>
			<div className='sponsor-text'>
				Since 2004, Flow Traders has been a principal trading firm and one of the world’s largest liquidity providers, specialised in Exchange Traded Products (ETPs).
			</div>
		</div>

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
		</>
	)
}