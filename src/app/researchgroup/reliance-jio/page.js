import Image from 'next/image'
import Link from 'next/link'
import '../researchgroup.css'

import rg2_img from '../../../../resources/researchgroup/rg2.png'

export default function Page(){
	return(
		<>
		<div className='research-banner-container'>
			<div className='research-outer'>
				<div className='research-header-container'>
					<p>RESEARCH GROUP</p>
				</div>
				<div className='thinLine'></div>

				<div className='article-heading'>
					Reliance Jio leads India’s 5G revolution
				</div>

				<div className='article-minor-text'>
					On October 1, 2022
				</div>

				<div className='image-article-container'>
					<Image
						src={rg2_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="rg3 pic"
					/>
				</div>

				<div className='article-text'>
					In September of 2017, India’s government conceived a plan for the foundation of a digital transformation through the power of connectivity across 
					the country. The initiative was titled 5G India 2020, and it served the purpose of pushing for the early deployment of 5G technology in major cities 
					to expand the telecommunications landscape of smart devices. Although the timescale may have been optimistic, and certainly not helped by the global 
					pandemic, India’s 5G auction finally commenced in mid-2022, concluding on the 1st of August.
				</div>

				<div className='article-minor-heading'>
					How did the auction unravel?
				</div>

				<div className='article-text'>
					After 40 rounds of bidding across the span of 7 days, the Indian government was able to raise $19 billion as it sold 71% of the over 72GHz of airwaves on 
					offer. While the lower bands raise download speeds in rural areas by 30 to 50%, the mid-bands will fulfil the company’s objective, as stated by chairman 
					Akash Ambani, of providing services, platforms and solutions that will accelerate India’s digital revolution in sectors like education, healthcare, 
					agriculture, manufacturing and public administration. Credit Suisse estimates that the government is likely to receive $1.8 billion as upfront payments 
					for FY23 on the assumption that bidders use the full deferred payment option, which will help narrow its fiscal deficit. On top of this, the Indian government 
					has opened an additional income stream through an annual spectrum usage charge, based on the revenues and spectrum holdings of network operators. Of the four 
					primary bidders in the auction, market leader Reliance Jio emerged as the highest spender, successfully bidding for over $11 billion worth of airwaves, followed 
					by Bharti Airtel, Vodafone Idea and new entrant Adani Data Networks. This cemented Jio’s rise to the top of India’s telecommunications sector, with over 400 
					million subscribers and a market share of 37%, as well as backing from investors such as Facebook and Google, according to analysts at Jefferies. The results 
					of the auction boosted the share price of all four participating companies, each growing between 2% and 4% on the Bombay Stock Exchange at the close of trade 
					the following week.
				</div>

				<div className='article-minor-heading'>
					How does Jio plan to catalyse the rollout of 5G technology?
				</div>

				<div className='article-text'>
					In addition to Facebook and Google, Reliance Jio’s 5G plan has support from both Qualcomm and Intel, who offer hardware expertise and advanced computing technology 
					that allow for a more efficient rollout of services. Furthermore, Reliance Jio has extended its partnerships with numerous mobile hardware companies, including Samsung, 
					Huawei, Ericsson, and Nokia, which has enabled it to launch its 5G services across 184 cities in India, as of January 2023. Its partnership with the University of Oulu 
					is further evidence of the company’s commitment to being at the forefront of the telecommunications sector, and this resource of research and development puts the company 
					in a strong position to be a global player in the industry in the years to come. The company’s investment in cutting edge technology and its advanced approach to utilising 
					airwaves give it a competitive edge in the Indian 5G sector, as it strives to enhance the Indian telecommunications industry and shape its future.
				</div>

				<div className='article-minor-heading'>
					What are the implications of the 5G rollout on India’s economy?
				</div>

				<div className='article-text'>
					Indian authorities and companies hope 5G will stimulate the growth of the country’s digital economy, which has thrived on the back of the rapid adoption of mobile phones over 
					the past decade, and support the Digital India vision of the present government. EY’s global head of emerging markets TMT, Prashant Singhal, believes that this auction has seen 
					India poised to be a digital superpower, and that the development of technology infrastructure will build the foundation of the country’s thriving economy. It is imperative 
					that the government continues to foster competition in the telecommunications sector in order to meet its broader agenda of bringing down India’s business costs and making 
					services more affordable for poorer citizens, and its commitment to this has been exemplified by acquiring a 33% stake in Vodafone Idea in an effort to support Jio and Airtel’s 
					competitor.
				</div>

				<div className='article-text'>
					The next generation network is seen as vital in creating new job opportunities and driving innovation, as emerging technologies like self-driving cars and artificial intelligence 
					further develop. Moreover, the economic benefits from 5G offers domestic industries to reach out to global markets, and as per the OECD, the rollout will help India increase its 
					GDP, create employment and accelerate the digitisation of the economy. Chief executive of Ericsson AB Borje Ekholm predicts that India will have the 2nd strongest digital 
					infrastructure in the world, and is beating the US and Europe in the rollout of 5G technology.
				</div>

				<div className='article-minor-heading'>
					Sources
				</div>

				<div className='article-italic-heading'>
					Financial Times:
				</div>
				<div className='article-text'>
					https://www.ft.com/content/77efa53d-436c-4fb8-bc0d-89a1b29f55a6
				</div>
				<div className='article-text'>
					https://www.ft.com/content/5464aff7-61da-40bb-9b66-e3f45eda32a1
				</div>

				<div className='article-italic-heading'>
					Reuters:
				</div>
				<div className='article-text'>
					https://www.reuters.com/business/media-telecom/india-concludes-19-bln-5g-spectrum-auction-2022-08-01/
				</div>

				<div className='article-italic-heading'>
					India Department of Telecommunications:
				</div>
				<div className='article-text'>
					https://dot.gov.in/spectrum-management/2886 https://dot.gov.in/5g-india-2020
				</div>

				<div className='article-italic-heading'>
					Wall Street Journal:
				</div>
				<div className='article-text'>
					https://www.wsj.com/livecoverage/davos2023/card/india-is-ahead-of-world-in-5g-rollout-says-ericsson-ceo-B9z4prY6wgbQU2QCoxzV
				</div>

				<div className='article-italic-heading'>
					Qualcomm:
				</div>
				<div className='article-text'>
					https://www.qualcomm.com/5g/the-5g-economy
				</div>

				<div className='article-italic-heading'>
					The Economic Times:
				</div>
				<div className='article-text'>
					https://telecom.economictimes.indiatimes.com/news/indias-1st-5g-spectrum-auction-has-ended-on-day-7-govt-nets-over-rs-150173-crore/93270757?redirect=1
				</div>

				<div className='article-buffer'></div>

			</div>
		</div>
		</>
	)
}