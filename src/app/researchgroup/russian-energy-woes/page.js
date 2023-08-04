import Image from 'next/image'
import Link from 'next/link'
import '../researchgroup.css'

import rg1_img from '../../../../resources/researchgroup/rg1.png'

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
					Russian Energy Woes
				</div>

				<div className='article-minor-text'>
					By Gabriel Gentile on March 19, 2022
				</div>

				<div className='image-article-container'>
					<Image
						src={rg1_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="rg3 pic"
					/>
				</div>

				<div className='article-text'>
					The invasion of Ukraine by Russia has shaken the world, with such conflict in Europe being unprecedented in recent history. It is clear the Ukrainian 
					people will bear the brunt of the suffering as their homes are transformed into warzones. This conflict will also bring wider implications for nearly 
					every state across the world, especially with regards to energy. The energy market has already been under significant strain since we began to emerge 
					from the worst of the pandemic, and it is clear that sanctions on Russia will only worsen this, with the poorest of households facing the highest 
					increase in the cost of living. This situation does, however, provide an opportunity to accelerate decarbonisation as we are forced to find alternative, 
					sustainable energy for the future.
				</div>

				<div className='article-text'>
					Inflation in the UK has been edging upwards, rising to 4.9% in January and expected to be even higher in the coming months. The cause of this can be attributed 
					to many different factors, such as expansionary monetary policy, but energy in the post-COVID world definitely has a large contributing role. Oil production 
					ground to a halt in 2020 as the world went into lockdown and demand dried up, with even negative prices being observed. Due to the nature of oil, production 
					can be easy to halt, but is much more challenging to restart, explaining the soaring prices since the post covid recovery as supply struggles to keep up with 
					the wild swings in demand. It is clear that even before the Ukraine crisis, we were not in a good position in terms of an efficient energy market. 
				</div>

				<div className='article-minor-heading'>
					The importance of Russia
				</div>

				<div className='article-text'>
					It is important to recognise the extent to which the global community depends upon Russia’s energy exports. It ranks in as the largest natural gas exporter, 
					second largest oil and third largest coal exporter, with European countries such as Germany being the most dependent on Russia. Cutting off these exports, 
					especially in the EU area, is going to be a major supply shock to many businesses as the price of oil rises domestically. Russia is also the 11th largest economy 
					in nominal terms, which means that economic sanctions risk disrupting a major trade partner for many countries, possibly adding even more to inflationary pressure 
					already seen across the economy.
				</div>

				<div className='article-minor-heading'>
					Sanctions already imposed
				</div>

				<div className='article-text'>
					Much of the Western world has decided to impose a variety of sanctions to take a stand against the Russian government whilst avoiding direct military conflict. The 
					US has imposed an immediate ban on Russian oil imports and the UK plans to phase them out by the end of the year. The EU has not gone as far to ban imports, but has 
					put restrictions on Russian oil companies such as investment bans as well as loans and debt financing restrictions. This has had a major impact on the price of oil, 
					with the price level reaching $139 per barrel, which was double the price seen at the start of December last year. This has, however, fallen back to under $100 per 
					barrel due to the progress of ceasefire talks and possible cooperation between Western nations and certain OPEC members. It is clear, though, that the price of oil 
					remains a large point of concern for many countries, and this sentiment has extended beyond just oil to metals such as aluminium and nickel. Due to the widespread 
					usage of these metals, this is only further contributing to price rises especially in electronic goods.
				</div>

				<div className='article-text'>
					Russia is struggling to decide what to do with its excess supplies as storage facilities are filling up fast. Currently there is what could be referred to as a ‘buyers strike’ 
					where many global firms are refusing to purchase oil from Russia even with discounts as high as 25% due to the potential legal and reputational damage of doing so, as 
					illustrated by the backlash Shell initially received for continuing to purchase from them. Financing for Russian firms has become a major challenge, with most foreign 
					banks refusing to issue letters of credit and a few select banks banned from using the international payment SWIFT.
				</div>

				<div className='article-text'>
					Even China has shown hesitancy in funding Russian operations, but it still remains unclear to what extent China will be willing to help out its ally. All of this has made raising 
					funds increasingly difficult for firms and the government to reroute oil and other exports to Asia, as well as the fact the logistical constraints imposed by the required 
					infrastructure mean that adapting to new markets will take time. If production is reduced because of this, upward pressure will continue to be put on commodities prices. 
					Western nations such as the US have considered raising domestic output of oil or looking for alternatives such as natural gas, but there is no short term solution to replace 
					the entirety of the lost Russian supply.
				</div>

				<div className='article-minor-heading'>
					The burden of high prices
				</div>

				<div className='article-text'>
					Both firms and consumers will have to adapt to higher prices in energy and across the entirety of the economy. High energy prices will likely take a toll on the most vulnerable in 
					our societies and those with low incomes will be unlikely to see the necessary rise in income to match the high rates of inflation, leading to possible significant falls in the 
					standard of living, an issue in which the government will surely feel the pressure to intervene. We could also see the current account balance of 37 oil-importing developing 
					countries fall a few percentage points, which could pose an even bigger risk to the people of these countries, especially Turkey which is already in a crisis of its own. Oil 
					dependent firms have seen their stocks tumble: American Airlines fell 20% when oil prices peaked, and other low budget European airlines have seen similar falls. The ECB has also 
					recognised that the invasion has created a major shock, and predicts higher inflation and lower growth as a result, creating a difficult climate for investors to navigate profitably.
				</div>

				<div className='article-text'>
					Though this all may seem rather gloomy, there is an opportunity within this chaos: the chance to transition to green energy. Christopher Hohn, a hedge fund founder, has said he expects 
					this disruption in supply of oil to trigger a surge in renewables investment. Renewable energy answers many of the problems we face: it means we will no longer be dependent on fossil fuel 
					exporters, as well as helping reduce carbon emissions. The EU has already boosted renewable energy funding to reduce dependence on Russian gas, and we can expect others to follow suit. The main 
					challenge in accelerating decarbonisation is the fact that it is unlikely to be able to meet the large deficit of supply immediately, but still we should incorporate longer term solutions into any 
					shorter term ones.
				</div>

				<div className='article-text'>
					So, overall it seems clear that Russia’s energy and economic position will have wide reaching consequences across many parts of the global community. As pressure to impose further sanctions increases and 
					firms refuse to deal with any Russian companies, energy prices are likely to be under sustained pressure for the near future, which is bad news for many given the already rapidly accelerating levels 
					as we enter the post covid recovery. Standards of living and profits will fall, but we can still make the best of this dire situation. By embracing green technology to foster energy independence and 
					prevent any future crises similar in structure, we can also help with the urgent cause of reducing carbon emissions to slow down climate change.
				</div>

				<div className='article-minor-heading'>
					Sources
				</div>

				<div className='article-italic-heading'>
					The Economist:
				</div>
				<div className='article-text'>
					https://www.economist.com/finance-and-economics/2022/03/12/can-the-world-cope-without-russias-huge-commodity-stash
				</div>

				<div className='article-italic-heading'>
					Financial Times:
				</div>
				<div className='article-text'>
					https://www.ft.com/content/f98e62e3-7008-4a3e-b835-55568b74ee30
				</div>
				<div className='article-text'>
					https://www.ft.com/content/7ea53ae2-da8f-4166-91eb-b1d180b609e5
				</div>
				<div className='article-text'>
					https://www.ft.com/content/4130028c-c5fb-4643-bdc7-c6da3b3bc0c9
				</div>

				<div className='article-italic-heading'>
					Euronews:
				</div>
				<div className='article-text'>
					https://www.euronews.com/green/2022/03/11/europe-scrambles-to-keep-the-lights-on-as-it-sidelines-russian-gas
				</div>

				<div className='article-buffer'></div>

			</div>
		</div>
		</>
	)
}