import Image from 'next/image'
import Link from 'next/link'
import '../researchgroup.css'

import rg3_img from '../../../../resources/researchgroup/rg3.png'

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
					Spanish Pensions: Ticking Time Bomb?!
				</div>

				<div className='article-minor-text'>
					By Manuel Lara-Aguado on October 20, 2022
				</div>

				<div className='image-article-container'>
					<Image
						src={rg3_img}
						style={{objectFit: 'cover'}}
						fill={true}
						alt="rg3 pic"
					/>
				</div>

				<div className='article-text'>
					Recent economic development, Mediterranean diets and abundant sunshine have placed Spain year-on-year in the top spots in quality-of-life 
					indicators, with many of its cities ranked as some of the best places to live by CNBC, including Malága in 2nd place. These factors, plus an 
					internationally praised public healthcare system, means Spain boasts the second highest life expectancy in the world, at 83.5 years of age.
				</div>

				<div className='article-text'>
					These blessings, however, have placed an exorbitant amount of stress on the Spanish social security system to maintain long public pensions. With 
					life expectancy on the rise and fertility on the drop (with only 1.24 children per woman), the state is facing a critical breaking point, accentuated 
					by high fiscal pressure, increased cost of living, youth unemployment, and poor immigration. This trend is not temporary, with social security 
					contributions expected to drop and Spain’s population expected to fall by 9.4 million by 2050 (24% net drop), with 37% of the population being over 65. 
				</div>

				<div className='article-text'>
					What to make of this conundrum?
				</div>

				<div className='article-minor-heading'>
					Spanish Social Security Framework
				</div>

				<div className='article-italic-heading'>
					Boom & Surplus: pre-2008
				</div>

				<div className='article-text'>
					The Spanish system relies on current contributors funding current beneficiaries – a formula which only worked as long as a surplus is maintained. This 
					is arguably (barring certains exceptions such as Chile) the same for most other Western countries.
				</div>

				<div className='article-text'>
					With economic development and emancipation coming in the decades after Spain’s transition to democracy, fertility rates dropped from the 1990s onwards. 
					The pension problem  first came into serious consideration during the Pacts of Toledo in 1995, when an economic crisis put the pension system under risk 
					of deficit as firms used widespread early retirement to lay-off workers. Its main results – the creation of a reserve fund to pay pensions during recession 
					years and the separation of taxation funding for different social services, only slightly ameliorated the problem in the short-term, and foreshadowed the problems to come.
				</div>

				<div className='article-text'>
					Spain had an opportunity to stabilise its social security during the early century boom, with public fiscal surpluses in 2005, 2006, 2007 – mainly due to 
					increased tax revenues from the booming construction sector, low unemployment and generous European loans. On many accounts, however, the surplus was largely 
					mis-invested into infrastructure projects, raising pensions and lowering retirement ages to mid-50s, which, although increasing quality of life, came at the cost 
					of an even more unsustainable social security system.
				</div>

				<div className='article-italic-heading'>
					Austerity & Debt: post-2008
				</div>

				<div className='article-text'>
					Those were the last surplus years for public accounts, with the Treasury predicting a deficit at least until 2024 – which would make a continued 17 year-streak. Spain was 
					badly hit by the mortgage crisis and Great Recession of 2008, with its debt to GDP ratio going over 100% and the government borrowing excessively to keep up pensions. In 
					order to prevent bankruptcy, severe austerity (high income taxes combined with lower government spending) were imposed.  This unfortunately made pensions barely keep up with 
					the standard of living – many retirees currently living on the fringe of relative poverty. This persisted over time, the situation becoming so desperate for pensioners that in 
					2021, the government, using the EU COVID-19 funds, tied pensions to the CPI as an emergency measure to help battle ever-increasing costs of living. This only appears to have 
					made the debt spiral worse. Therefore, even as the social security deficit rapidly worsens, it seems unlikely that lowering already considerably low pensions is the best answer to the crisis.
				</div>

				<div className='article-minor-heading'>
					Labour Markets & Immigration 
				</div>

				<div className='article-text'>
					What can be done to balance the budget? With low fertility rates, one of the most obvious responses would be to increase youth immigration – the best proven demographic to increase 
					contributions to social security. Problematically, however, Spain’s youth unemployment currently sits at around 25% (one the EU’s highest), with the available work opportunities 
					mainly being seasonal, precarious and low-paying: exactly the work taken up by migrants. This would create uncomfortable political implications for governments, especially in a 
					homogeneous society like Spain which has been apprehensive towards the influx of low-skilled migrants from Northern and Sub-Saharan Africa. Notwithstanding, immigration only ever 
					remains a temporary fix – as the immigrants who support current pensioners will soon become pensioners themselves. Demographics and uplifting a low fertility rate appears to be the 
					problem – yet this is inexorably tied to poor work opportunities for the youth relative to cost of living, low marriage rates, and a delayed average age of emancipation of 29 – 
					which delays the first child and thus means fewer children overall. The low fertility paradigm appears to hit all Western countries, but is especially felt in Spain. 
				</div>

				<div className='article-text'>
					As previously alluded, the generational wage-gap is significant, with an unemployed youth having to sustain retirees who worked in the “golden age of Spanish employment” with high wages 
					and benefits (with pensions being roughly tied to past wages/contributions) – many of them with over 20 years left to live. Furthermore, already very high income, business and consumption 
					taxes make an increase in taxes unlikely to yield increased revenues for pensions. With already high pressure on pensioners and contributors, it seems like a poor volume of contributions 
					appears to be the problem – unless a complete reformation of pension systems is brought forth.
				</div>

				<div className='article-text'>
					One alternative is to create a more flexible labour market: as very high sign-on conditions and compensation pay-outs for firing create little full-time jobs and high unemployment. A 
					monthly minimum wage of around 1000€ could also be divided by age groups or by region to incentivise employment (and therefore social security contributions)- as is done in the UK. 
					This could be helpful in the context of COVID-19 recovery, which hit the tourism sector – the country’s largest industry and employer after the state (representing 19% of GDP) – especially hard.
				</div>

				<div className='article-minor-heading'>
					Ticking Time Bomb?!
				</div>

				<div className='article-text'>
					Ideally, the pension system would have been solved during easier economic times – either with a better organised reserve fund or with a system where current contributors forcibly save for their 
					own retirement in a fund for when they are older. This would make it immune to the current demographic problems. Sustaining pensions via debt is just postponing the problem, and is a dangerous 
					practice with high levels of borrowing post-covid, increasing inflation and rising interest rates.
				</div>

				<div className='article-text'>
					As with many things, it seems like the problem is political. With retirees increasingly representing a greater part of the electorate, nobody would want to lower already significantly low pensions 
					or increase an already high retirement age. High levels of youth dissatisfaction towards work combined with increasing taxes or introducing flexible labour markets would anger existing workers. A fixed 
					system of personal contributions, by tying current savings into that person’s future pension would screw over an entire generation who has had to support its older counterpart for so long. But with bankruptcy 
					looming, it seems like something must be done – even if the options are not ideal. Spain should look towards changing the system of contributions and payments to lower state intervention, and flexibilizing 
					the labour market to increase youth employment. In the long term, this should ease the economic pain of having children and make Spain a more attractive country for high-skilled immigration. 
					Although societal norms and attitudes towards marriage and family are nearly impossible to change – it should be easier for those who want children to be able to have them – part of the reason which explains 
					the current gap. Yet many worry that the problem is so severe – and the unemployment so acute – that minor increases in fertility now might be decades late to support current or near-future pensioners.
				</div>

				<div className='article-text'>
					This problem does not affect pensioners only. The collapse of the pension system would represent a huge negative negative shock for similar ageing European markets such as Portugal, Italy, or Greece. We saw 
					how rapidly the Eurozone debt crisis and insecurity spread throughout Europe in 2012, and how current unsustainable levels of debt and fears of default are brewing in similar markets. Spanish firms would have 
					to adapt to severe generational inequality, with nearly 15 million people losing their main source of income and old-age poverty becoming more prevalent: a move which will change the dynamics of purchasing power 
					and prompt an even higher reliance on public services and government employment. Especially in older, rural areas, we might see a strong collapse of SMEs, with the most dominant conglomerates being able to endure 
					decreases in economic activity for longer, and a consolidation of the state. The Spanish bond will suffer, as a lack of credibility of Spanish banks and institutions will (once again) increase the risk premium. 
					If the situation becomes desperate, we might see a European bail-out with even tighter fiscal restrictions which will hurt many growing Spanish firms and their ability to raise equity, debt, and capital. This financial 
					environment might prompt an even higher level of youth brain-drain to more prosperous regional economies such as Germany or the UK, giving rise to a viciously negative economic cycle. 
				</div>

				<div className='article-minor-heading'>
					Sources
				</div>

				<div className='article-italic-heading'>
					Banco de España:
				</div>
				<div className='article-text'>
					https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/21/Files/do2106e.pdf
				</div>

				<div className='article-italic-heading'>
					La Caixa:
				</div>
				<div className='article-text'>
					https://www.caixabankresearch.com/en/pension-reform-spain-necessary-sufficient
				</div>

				<div className='article-italic-heading'>
					BBVA:
				</div>
				<div className='article-text'>
					https://www.bbvaresearch.com/en/publicaciones/spain-pensions-in-the-2022-budgets/#:~:text=Pensions%20are%20the%20major%20item,170%2C494%20million%20planned%20for%202022.
				</div>

				<div className='article-italic-heading'>
					CNBC:
				</div>
				<div className='article-text'>
					https://www.cnbc.com/2021/12/01/the-top-10-cities-for-expats-living-and-working-abroad-in-2021.html
				</div>

				<div className='article-italic-heading'>
					El Mundo:
				</div>
				<div className='article-text'>
					https://www.elmundo.es/economia/macroeconomia/2021/10/16/61698d33fdddff31518b45b6.html
				</div>

				<div className='article-italic-heading'>
					Wall Street Journal:
				</div>
				<div className='article-text'>
					https://www.wsj.com/articles/SB10001424127887323374504578217384062120520
				</div>

				<div className='article-buffer'></div>

			</div>
		</div>
		</>
	)
}