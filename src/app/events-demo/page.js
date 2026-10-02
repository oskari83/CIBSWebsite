'use client'

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { UpcomingEventsList, PastEventsList } from '@/components/eventslist'
import '@/components/eventslist.css'
import './events-demo.css'

// Background banner
import cibsBackground_img from '../../../public/resources/kingscollege3.jpg'

// CIBS 2026-27 Authentic Images
import pjt_img from '../../../public/resources/events/2026-27/PJT-Partners-Exclusive-Networking-Dinner.png'
import houlihan_img from '../../../public/resources/events/2026-27/Houlihan-Lokey-Company-Presentation.png'
import howToBreak_img from '../../../public/resources/events/2026-27/How-To-Break-Into-Investment-Banking.png'
import cibsLogo_img from '../../../public/resources/events/2026-27/cibs-logo.jpg'
import researchGroup_img from '../../../public/resources/events/2026-27/research-group.jpeg'

// Category definitions with signature colors
const CATEGORIES = [
	{ id: 'all', label: 'All Events', color: '#4E35A0' },
	{ id: 'analyst-series', label: 'Analyst Series', color: '#2563eb' },
	{ id: 'company-presentations', label: 'Company Presentations', color: '#059669' },
	{ id: 'networking', label: 'Networking & Socials', color: '#d97706' },
	{ id: 'competitions', label: 'Competitions', color: '#dc2626' },
	{ id: 'research-group', label: 'Research Group', color: '#7c3aed' },
	{ id: 'workshops', label: 'Workshops', color: '#0891b2' },
]

// 2026-2027 ACADEMIC YEAR EVENTS DATABASE (September 2026 – September 2027)
const ALL_EVENTS = [
	// --- SEPTEMBER 2026 (Pre-term Kickoff) ---
	{
		id: 'how-to-break-2026',
		title: 'How To Break Into Investment Banking',
		dateKey: '2026-09-20',
		month: 'Sep',
		day: '20',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: howToBreak_img,
		description: "Internship applications are open right now, so we've lined up a free session on what separates the students who convert interviews into offers from the ones who don't.",
		link: 'https://www.instagram.com/p/DdR8s5tiNZR/?img_index=1',
	},

	// --- OCTOBER 2026 (Michaelmas Term Launch) ---
	{
		id: 'termcard-freshers-1',
		title: "Freshers' Fair (Day 1)",
		dateKey: '2026-10-06',
		month: 'Oct',
		day: '6',
		category: 'networking',
		categoryLabel: 'Networking & Socials',
		categoryColor: '#d97706',
		image: cibsLogo_img,
		description: "Come visit the CIBS stall at Cambridge Freshers' Fair! Meet our committee, learn about our upcoming termcard, workshops, mentorship schemes, and how to get involved with Cambridge Investment Banking Society.",
		link: 'https://www.facebook.com/CIBSoc/',
	},
	{
		id: 'termcard-freshers-2',
		title: "Freshers' Fair (Day 2)",
		dateKey: '2026-10-07',
		month: 'Oct',
		day: '7',
		category: 'networking',
		categoryLabel: 'Networking & Socials',
		categoryColor: '#d97706',
		image: cibsLogo_img,
		description: "Day 2 of Cambridge Freshers' Fair. Discover our analyst educational series, speaker events, flagship M&A competitions, and our Research Group recruitment process.",
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-appian',
		title: 'Appian Capital Advisory Presentation',
		dateKey: '2026-10-08',
		month: 'Oct',
		day: '8',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: cibsLogo_img,
		description: 'Join us for an exclusive presentation hosted by Appian Capital Advisory x CIBS. Discover more about Appian, a premier private equity firm uniquely focused on metals, mining, and critical green infrastructure.',
		link: 'https://www.facebook.com/CIBSoc/posts/pfbid02RsKvvNd5y9WkixshsEmoFhxsgjgbjYpFqLsMRr2uWNXvW7DnrDrSDj5qyuMV6jJfl',
	},
	{
		id: 'termcard-analyst-ib',
		title: 'AS: Investment Banking',
		dateKey: '2026-10-08',
		month: 'Oct',
		day: '8',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Deep dive into the Investment Banking Division (IBD). Learn about Mergers & Acquisitions (M&A), Capital Markets (ECM/DCM), restructuring, the day-to-day life of an analyst, pitchbooks, and transaction workflow.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-marshall',
		title: 'Social Collaboration with Marshall Society',
		dateKey: '2026-10-10',
		month: 'Oct',
		day: '10',
		category: 'networking',
		categoryLabel: 'Networking & Socials',
		categoryColor: '#d97706',
		image: cibsLogo_img,
		description: "Join CIBS and the Marshall Society (Cambridge University's economics society) for an exclusive joint social and networking evening. Connect with fellow students interested in finance, macroeconomics, and markets.",
		link: 'https://www.facebook.com/CIBSoc/',
	},
	{
		id: 'termcard-hl',
		title: 'Houlihan Lokey Company Presentation',
		dateKey: '2026-10-12',
		month: 'Oct',
		day: '12',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: houlihan_img,
		description: 'Meet bankers representing Houlihan Lokey to learn about a career in investment banking, financial restructuring, corporate valuation, and their upcoming recruitment process.',
		link: 'https://www.instagram.com/p/Dds5Wm2G9L9/?img_index=1',
	},
	{
		id: 'termcard-pimco',
		title: 'PIMCO Presentation & Networking',
		dateKey: '2026-10-14',
		month: 'Oct',
		day: '14',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: cibsLogo_img,
		description: 'PIMCO, one of the premier global fixed income investment managers, joins CIBS for an exclusive firm presentation, macroeconomic outlook discussion, and recruitment Q&A.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-st',
		title: 'AS: Sales & Trading',
		dateKey: '2026-10-14',
		month: 'Oct',
		day: '14',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Explore the trading floor! Understand the distinction between Flow Trading, Market Making, Structuring, and Institutional Sales across Equities, FICC, and Derivatives.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-pjt',
		title: 'PJT Partners Exclusive Networking Dinner',
		dateKey: '2026-10-15',
		month: 'Oct',
		day: '15',
		category: 'networking',
		categoryLabel: 'Networking & Socials',
		categoryColor: '#d97706',
		image: pjt_img,
		description: 'PJT Partners will be organising an exclusive invite-only dinner in Cambridge on October 15th with senior bankers from Strategic Advisory and Restructuring.',
		link: 'https://www.instagram.com/p/DdZxYdyiC3d/?img_index=1',
	},
	{
		id: 'termcard-analyst-consulting',
		title: 'AS: Consulting',
		dateKey: '2026-10-15',
		month: 'Oct',
		day: '15',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'A comprehensive guide to strategy and management consulting: case interview frameworks, market sizing, commercial due diligence, and exit opportunities into private equity.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-vc',
		title: 'AS: Venture Capital',
		dateKey: '2026-10-16',
		month: 'Oct',
		day: '16',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Discover early-stage investing, cap tables, term sheets, founder evaluation, venture sourcing, and how VCs back high-growth startups from Seed to Series B and beyond.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-intro-finance',
		title: 'Intro to Finance & Application Advice (SCN)',
		dateKey: '2026-10-17',
		month: 'Oct',
		day: '17',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: cibsLogo_img,
		description: 'Essential session breaking down the finance landscape, spring weeks, summer internships, CV formatting, cover letters, HireVue video interviews, and networking tactics.',
		link: 'https://www.facebook.com/photo/?fbid=812828360849220&set=a.489461066519286',
	},
	{
		id: 'termcard-analyst-am',
		title: 'AS: Wealth & Asset Management',
		dateKey: '2026-10-19',
		month: 'Oct',
		day: '19',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Learn how asset managers, sovereign wealth funds, and private wealth managers allocate capital across asset classes, construct client portfolios, and generate alpha.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-pe',
		title: 'AS: Private Equity',
		dateKey: '2026-10-21',
		month: 'Oct',
		day: '21',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Inside the buy-side: leveraged buyouts (LBOs), value creation playbooks, fund structures, carried interest, investment committees, and recruiting pipelines.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-credit',
		title: 'AS: Private Credit',
		dateKey: '2026-10-22',
		month: 'Oct',
		day: '22',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Examine the explosive growth of direct lending, mezzanine financing, unitranche structures, distressed debt, and private credit alternatives to syndicated bank loans.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-preet-sheth',
		title: 'Preet Sheth Fireside Chat',
		dateKey: '2026-10-23',
		month: 'Oct',
		day: '23',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: cibsLogo_img,
		description: 'Fireside chat with Preet Sheth discussing career trajectory, lessons from senior financial leadership, macro market dynamics, and high-impact advisory work.',
		link: 'https://www.facebook.com/photo/?fbid=839620621503327&set=a.489461066519286',
	},
	{
		id: 'termcard-analyst-hf',
		title: 'AS: Hedge Fund',
		dateKey: '2026-10-23',
		month: 'Oct',
		day: '23',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Discretionary vs. Systematic hedge funds, Long/Short Equity, Global Macro, Event-Driven, Multi-Manager pod shops, and risk management strategies.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-rg-accounting-1',
		title: 'RG: Financial Accounting (Part 1)',
		dateKey: '2026-10-24',
		month: 'Oct',
		day: '24',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'Cambridge Investment Banking Research Group technical workshop on core financial statements: Income Statement, Balance Sheet, Cash Flow Statement, and 3-statement linking.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-ops',
		title: 'AS: Operations',
		dateKey: '2026-10-26',
		month: 'Oct',
		day: '26',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'Understanding front-to-back bank architecture: trade lifecycle, middle office, clearing, settlement, collateral management, treasury, and regulatory frameworks.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-er',
		title: 'AS: Equity Research',
		dateKey: '2026-10-26',
		month: 'Oct',
		day: '26',
		category: 'analyst-series',
		categoryLabel: 'Analyst Series',
		categoryColor: '#2563eb',
		image: cibsLogo_img,
		description: 'How equity research analysts initiate company coverage, build earnings forecasting models, conduct channel checks, write research notes, and pitch Buy/Hold/Sell calls.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-comp-ma',
		title: 'M&A Competition (FBU) — Late October',
		dateKey: '2026-10-29',
		month: 'Oct',
		day: '29',
		category: 'competitions',
		categoryLabel: 'Competition',
		categoryColor: '#dc2626',
		image: cibsLogo_img,
		description: 'CIBS x Finance & Business Union (FBU) M&A Case Competition. Pitch a strategic acquisition, perform valuation analysis, quantify synergies, and present before a panel of elite bankers.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-comp-pitch',
		title: 'Stock Pitch Competition (FBU) — Late October',
		dateKey: '2026-10-30',
		month: 'Oct',
		day: '30',
		category: 'competitions',
		categoryLabel: 'Competition',
		categoryColor: '#dc2626',
		image: cibsLogo_img,
		description: 'CIBS x Finance & Business Union (FBU) Stock Pitch Competition. Form a team, prepare a comprehensive Long or Short investment thesis, and compete for cash prizes and fast-track interviews.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-rg-accounting-2',
		title: 'RG: Financial Accounting (Part 2)',
		dateKey: '2026-10-31',
		month: 'Oct',
		day: '31',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'Advanced accounting mechanics: Working Capital adjustments, Depreciation schedules, Debt schedules, Revenue recognition, and common interview accounting questions.',
		link: 'https://www.instagram.com/cibsoc/',
	},

	// --- NOVEMBER 2026 (Technical Valuation & Modeling) ---
	{
		id: 'termcard-rg-dcf',
		title: 'RG: DCF (Discounted Cash Flow)',
		dateKey: '2026-11-07',
		month: 'Nov',
		day: '7',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'CIBS Research Group practical workshop on DCF valuation: Unlevered Free Cash Flow forecasting, WACC calculation, Terminal Value (Perpetuity Growth vs. Exit Multiple), and Sensitivity Tables.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-analyst-panel',
		title: 'Potential Analyst Panel',
		dateKey: '2026-11-07',
		month: 'Nov',
		day: '7',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: cibsLogo_img,
		description: 'Hear directly from recent Cambridge alumni currently working as full-time analysts and associates across top bulge bracket and boutique investment banks.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-rg-relval',
		title: 'RG: Relative Valuation',
		dateKey: '2026-11-14',
		month: 'Nov',
		day: '14',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'CIBS Research Group masterclass on Trading Comparables (Comps) and Precedent Transactions: EV/EBITDA, P/E, EV/Sales, peer group selection, and football field chart construction.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-carmaine',
		title: 'Carmaine Visconti Speaker Session',
		dateKey: '2026-11-18',
		month: 'Nov',
		day: '18',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: cibsLogo_img,
		description: 'Exclusive speaker session with Carmaine Visconti sharing insights into global market strategy, international advisory, and career progression in high-stakes finance.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-rg-lbo',
		title: 'RG: LBO Models',
		dateKey: '2026-11-21',
		month: 'Nov',
		day: '21',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'CIBS Research Group hands-on training on Leveraged Buyouts: Sources & Uses of funds, debt tranches, interest waterfalls, exit waterfall, and IRR / MoIC returns sensitivity.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'termcard-rg-ma',
		title: 'RG: M&A Models',
		dateKey: '2026-11-28',
		month: 'Nov',
		day: '28',
		category: 'research-group',
		categoryLabel: 'Research Group',
		categoryColor: '#7c3aed',
		image: researchGroup_img,
		description: 'CIBS Research Group capstone session on M&A Modeling: Purchase price allocation, goodwill creation, synergies realization, financing mix, and EPS accretion / dilution analysis.',
		link: 'https://www.instagram.com/cibsoc/',
	},

	// --- 2027 LENT & EASTER TERMS (Spring & Summer 2027) ---
	{
		id: 'lent-intro-spring-2027',
		title: 'Spring Week Preparation Masterclass',
		dateKey: '2027-01-21',
		month: 'Jan',
		day: '21',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: cibsLogo_img,
		description: 'Ace your spring week video interviews, assessment centres, group exercises, and commercial awareness questions before stepping into London offices.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'lent-convert-spring-2027',
		title: 'How to Convert Spring Weeks into Summer Offers',
		dateKey: '2027-02-11',
		month: 'Feb',
		day: '11',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: cibsLogo_img,
		description: 'Panel discussion with Cambridge students who successfully converted spring weeks into returning summer internship offers at top bulge brackets.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'lent-apollo-pe-2027',
		title: 'Apollo Global Management Private Equity Workshop',
		dateKey: '2027-02-25',
		month: 'Feb',
		day: '25',
		category: 'company-presentations',
		categoryLabel: 'Company Presentation',
		categoryColor: '#059669',
		image: cibsLogo_img,
		description: 'Exclusive private equity workshop and case study session with Apollo Global Management investment professionals.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'lent-cbfc-finals-2027',
		title: 'CBFC Grand Finals & Awards Ceremony',
		dateKey: '2027-03-04',
		month: 'Mar',
		day: '4',
		category: 'competitions',
		categoryLabel: 'Competition',
		categoryColor: '#dc2626',
		image: cibsLogo_img,
		description: 'The pinnacle finance competition in Cambridge. Finalist teams present before an esteemed judging panel of senior investment bankers and PE partners.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'easter-summer-internship-2027',
		title: 'Securing & Excelling in Summer Internships',
		dateKey: '2027-05-06',
		month: 'May',
		day: '6',
		category: 'workshops',
		categoryLabel: 'Workshops',
		categoryColor: '#0891b2',
		image: cibsLogo_img,
		description: 'How to prepare for your summer analyst stint: financial modeling review, pitchbooks, staffing etiquette, networking with MDs, and converting to a full-time return offer.',
		link: 'https://www.instagram.com/cibsoc/',
	},
	{
		id: 'easter-end-drinks-2027',
		title: 'CIBS Annual Garden Party & End of Year Drinks',
		dateKey: '2027-06-11',
		month: 'Jun',
		day: '11',
		category: 'networking',
		categoryLabel: 'Networking & Socials',
		categoryColor: '#d97706',
		image: cibsLogo_img,
		description: 'Celebrate the conclusion of the academic year with fellow CIBS members, incoming and outgoing committee, and sponsor alumni.',
		link: 'https://www.instagram.com/cibsoc/',
	},
]

const MONTH_NAMES_SHORT = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const MONTH_NAMES_LONG = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December'
]

// Calendar row height in pixels (5 full weeks = 590px viewport, closing bottom space and showing complete month without cut-off)
const ROW_HEIGHT = 118

// Immutable empty events array (ensures DayCell memoization never breaks)
const EMPTY_EVENTS = Object.freeze([])

// CONTINUOUS ACADEMIC YEAR CALENDAR GENERATOR (September 2026 to September 2027)
function buildContinuousCalendar() {
	const rawRows = []
	const startYear = 2026
	const startMonth = 8 // September (0-indexed)
	const endYear = 2027
	const endMonth = 8 // September (0-indexed)

	// Determine Monday of the week containing September 1, 2026
	const firstDay = new Date(startYear, startMonth, 1)
	const rawDay = firstDay.getDay()
	const startDayOfWeek = (rawDay + 6) % 7 // Monday = 0

	const curr = new Date(startYear, startMonth, 1 - startDayOfWeek)
	const lastTargetDate = new Date(endYear, endMonth + 1, 0)

	while (curr <= lastTargetDate || curr.getDay() !== 1) {
		const weekDays = []
		for (let i = 0; i < 7; i++) {
			const y = curr.getFullYear()
			const m = curr.getMonth()
			const d = curr.getDate()
			const dateKey = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

			weekDays.push({
				dateNum: d,
				dateKey,
				year: y,
				monthIndex: m,
				monthName: MONTH_NAMES_SHORT[m],
				isWeekend: curr.getDay() === 0 || curr.getDay() === 6,
			})

			curr.setDate(curr.getDate() + 1)
		}

		rawRows.push({ days: weekDays })
	}

	const monthStarts = []
	rawRows.forEach((row, idx) => {
		row.days.forEach((day) => {
			if (day.dateNum === 1) {
				const monthKey = `${day.year}-${String(day.monthIndex + 1).padStart(2, '0')}`
				monthStarts.push({
					rowIndex: idx,
					year: day.year,
					monthIndex: day.monthIndex,
					monthKey,
					monthTitle: `${MONTH_NAMES_LONG[day.monthIndex]} ${day.year}`,
				})
			}
		})
	})

	const allRows = rawRows.map((row, idx) => {
		let activeMonth = monthStarts[0]
		for (const ms of monthStarts) {
			if (ms.rowIndex <= idx) {
				activeMonth = ms
			} else {
				break
			}
		}

		return {
			rowIndex: idx,
			monthId: activeMonth.monthKey,
			monthTitle: activeMonth.monthTitle,
			year: activeMonth.year,
			monthIndex: activeMonth.monthIndex,
			days: row.days.map((day) => ({
				...day,
				isCurrentMonth: day.monthIndex === activeMonth.monthIndex && day.year === activeMonth.year,
			})),
		}
	})

	return { allRows, monthStarts }
}

const { allRows: GLOBAL_CALENDAR_ROWS, monthStarts: GLOBAL_MONTH_STARTS } = buildContinuousCalendar()

const GLOBAL_MONTH_INDEX_MAP = GLOBAL_MONTH_STARTS.reduce((acc, m) => {
	acc[m.monthKey] = m
	return acc
}, {})

// HIGH-PERFORMANCE MEMOIZED EVENT TILE
// Box grows taller and wraps text naturally for maximum readability
const EventTile = React.memo(function EventTile({ evt, onSelectEvent }) {
	return (
		<div
			className='eventsdemo-event-tile'
			style={{ borderLeftColor: evt.categoryColor }}
			onClick={(e) => {
				e.stopPropagation()
				onSelectEvent(evt)
			}}
			role='button'
			tabIndex={0}
			title={`${evt.title} (${evt.categoryLabel})`}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault()
					e.stopPropagation()
					onSelectEvent(evt)
				}
			}}
		>
			<span
				className='eventsdemo-tile-dot'
				style={{ backgroundColor: evt.categoryColor }}
			/>
			<span className='eventsdemo-tile-title'>{evt.title}</span>
		</div>
	)
})

// HIGH-PERFORMANCE MEMOIZED DAY CELL
const DayCell = React.memo(function DayCell({
	day,
	events,
	isToday,
	onSelectEvent,
	onOpenDayModal,
}) {
	const hasEvents = events.length > 0
	const maxVisible = 2
	const showMore = events.length > maxVisible

	const handleCellClick = () => {
		if (events.length > 1) {
			onOpenDayModal(day, events)
		} else if (events.length === 1) {
			onSelectEvent(events[0])
		}
	}

	return (
		<div
			className={`eventsdemo-day-cell ${!day.isCurrentMonth ? 'other-month' : ''} ${
				day.isWeekend ? 'weekend' : ''
			} ${hasEvents ? 'has-events' : ''} ${isToday ? 'is-today' : ''}`}
			onClick={handleCellClick}
		>
			<div className='eventsdemo-day-cell-top'>
				<span className={`eventsdemo-day-number ${isToday ? 'is-today' : ''}`}>
					{day.dateNum}
				</span>
				{isToday && <span className='eventsdemo-today-pill'>Today</span>}
				{!day.isCurrentMonth && !isToday && (
					<span className='eventsdemo-day-month-tag'>{day.monthName}</span>
				)}
			</div>

			<div className='eventsdemo-day-events-list'>
				{showMore ? (
					<>
						<EventTile evt={events[0]} onSelectEvent={onSelectEvent} />
						<button
							type='button'
							className='eventsdemo-more-pill'
							onClick={(e) => {
								e.stopPropagation()
								onOpenDayModal(day, events)
							}}
							title={`View all ${events.length} events on this day`}
						>
							+{events.length - 1} more
						</button>
					</>
				) : (
					events.map((evt) => (
						<EventTile key={evt.id} evt={evt} onSelectEvent={onSelectEvent} />
					))
				)}
			</div>
		</div>
	)
})

// HIGH-PERFORMANCE MEMOIZED CALENDAR ROW
const CalendarRow = React.memo(function CalendarRow({
	row,
	eventsByDate,
	todayIso,
	onSelectEvent,
	onOpenDayModal,
}) {
	return (
		<div className='eventsdemo-calendar-row'>
			{row.days.map((day) => {
				const dayEvents = eventsByDate.get(day.dateKey) || EMPTY_EVENTS
				return (
					<DayCell
						key={day.dateKey}
						day={day}
						events={dayEvents}
						isToday={todayIso !== null && day.dateKey === todayIso}
						onSelectEvent={onSelectEvent}
						onOpenDayModal={onOpenDayModal}
					/>
				)
			})}
		</div>
	)
})

export default function EventsDemoPage() {
	const [activeTab, setActiveTab] = useState(0) // 0 = 2026-27, 1 = Past Events
	const [todayIso, setTodayIso] = useState(null)
	const [activeCategory, setActiveCategory] = useState('all')
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedEvent, setSelectedEvent] = useState(null)
	const [selectedDayData, setSelectedDayData] = useState(null)
	const [currentDisplayMonth, setCurrentDisplayMonth] = useState('October 2026')
	const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
	const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false)

	const currentDisplayMonthRef = useRef('October 2026')
	const monthTitleTextRef = useRef(null)
	const scrollDebounceTimer = useRef(null)
	const categoryDropdownRef = useRef(null)
	const monthPickerRef = useRef(null)
	const viewportRef = useRef(null)
	const scrollRafRef = useRef(null)

	// Determine initial month: today if in range, otherwise October 2026
	const initialMonthKey = useMemo(() => {
		const d = new Date()
		const currentKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
		if (GLOBAL_MONTH_INDEX_MAP[currentKey]) return currentKey
		return GLOBAL_MONTH_INDEX_MAP['2026-10'] ? '2026-10' : GLOBAL_MONTH_STARTS[0].monthKey
	}, [])

	// Setup today's ISO and initial scroll position on mount
	useEffect(() => {
		const d = new Date()
		setTodayIso(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`)

		if (viewportRef.current && GLOBAL_MONTH_INDEX_MAP[initialMonthKey]) {
			const targetRow = GLOBAL_MONTH_INDEX_MAP[initialMonthKey].rowIndex
			viewportRef.current.scrollTop = targetRow * ROW_HEIGHT
		}
	}, [initialMonthKey])

	// Keep currentDisplayMonthRef synchronized
	useEffect(() => {
		currentDisplayMonthRef.current = currentDisplayMonth
	}, [currentDisplayMonth])

	// Close dropdowns on click outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
				setIsCategoryDropdownOpen(false)
			}
			if (monthPickerRef.current && !monthPickerRef.current.contains(event.target)) {
				setIsMonthPickerOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Close modals on Escape
	const handleKeyDown = useCallback((e) => {
		if (e.key === 'Escape') {
			setSelectedEvent(null)
			setSelectedDayData(null)
			setIsCategoryDropdownOpen(false)
			setIsMonthPickerOpen(false)
		}
	}, [])

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [handleKeyDown])

	// Filter events with single pass
	const filteredEvents = useMemo(() => {
		const q = searchQuery.trim().toLowerCase()
		if (activeCategory === 'all' && !q) return ALL_EVENTS

		return ALL_EVENTS.filter((evt) => {
			if (activeCategory !== 'all' && evt.category !== activeCategory) {
				return false
			}
			if (q) {
				const matchesTitle = evt.title.toLowerCase().includes(q)
				const matchesDesc = evt.description.toLowerCase().includes(q)
				const matchesCat = evt.categoryLabel.toLowerCase().includes(q)
				return matchesTitle || matchesDesc || matchesCat
			}
			return true
		})
	}, [activeCategory, searchQuery])

	// High performance O(1) date lookup Map
	const eventsByDate = useMemo(() => {
		const map = new Map()
		for (let i = 0; i < filteredEvents.length; i++) {
			const evt = filteredEvents[i]
			const list = map.get(evt.dateKey)
			if (list) {
				list.push(evt)
			} else {
				map.set(evt.dateKey, [evt])
			}
		}
		return map
	}, [filteredEvents])

	// O(N) category counts
	const categoryCounts = useMemo(() => {
		const counts = { all: ALL_EVENTS.length }
		CATEGORIES.forEach((c) => {
			if (c.id !== 'all') counts[c.id] = 0
		})
		for (let i = 0; i < ALL_EVENTS.length; i++) {
			const cat = ALL_EVENTS[i].category
			if (counts[cat] !== undefined) {
				counts[cat]++
			}
		}
		return counts
	}, [])

	const currentCategoryObj = useMemo(() => {
		return CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0]
	}, [activeCategory])

	// Stable callback handlers
	const handleSelectEvent = useCallback((evt) => {
		setSelectedEvent(evt)
	}, [])

	const handleOpenDayModal = useCallback((day, events) => {
		setSelectedDayData({ day, events })
	}, [])

	// ULTRA-FAST ZERO-LAG PASSIVE SCROLL LISTENER
	// Attached natively with { passive: true } to eliminate scroll latency and decouple from main thread
	useEffect(() => {
		const vp = viewportRef.current
		if (!vp) return

		const onScroll = () => {
			if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current)

			scrollRafRef.current = requestAnimationFrame(() => {
				if (!viewportRef.current) return
				const scrollTop = viewportRef.current.scrollTop
				const currentRowIdx = Math.max(
					0,
					Math.min(
						GLOBAL_CALENDAR_ROWS.length - 1,
						Math.floor((scrollTop + ROW_HEIGHT * 0.4) / ROW_HEIGHT)
					)
				)
				const currentRow = GLOBAL_CALENDAR_ROWS[currentRowIdx]
				if (currentRow && currentRow.monthTitle !== currentDisplayMonthRef.current) {
					currentDisplayMonthRef.current = currentRow.monthTitle
					// Direct DOM textContent update: 0ms, zero React re-render during fast scroll
					if (monthTitleTextRef.current) {
						monthTitleTextRef.current.textContent = currentRow.monthTitle
					}
					// Debounce React state synchronization until scroll comes to rest
					clearTimeout(scrollDebounceTimer.current)
					scrollDebounceTimer.current = setTimeout(() => {
						setCurrentDisplayMonth(currentRow.monthTitle)
					}, 350)
				}
			})
		}

		vp.addEventListener('scroll', onScroll, { passive: true })
		return () => {
			vp.removeEventListener('scroll', onScroll)
			if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current)
			if (scrollDebounceTimer.current) clearTimeout(scrollDebounceTimer.current)
		}
	}, [])

	// Month Navigation via Arrow buttons
	const navigateMonth = useCallback((direction) => {
		if (!viewportRef.current) return
		const scrollTop = viewportRef.current.scrollTop
		const currentRowIdx = Math.round(scrollTop / ROW_HEIGHT)

		const monthKeys = Object.keys(GLOBAL_MONTH_INDEX_MAP)
		let currentMonthKey = monthKeys[0]
		for (let i = 0; i < monthKeys.length; i++) {
			const key = monthKeys[i]
			const nextKey = monthKeys[i + 1]
			const thisRow = GLOBAL_MONTH_INDEX_MAP[key].rowIndex
			const nextRow = nextKey ? GLOBAL_MONTH_INDEX_MAP[nextKey].rowIndex : Infinity
			if (currentRowIdx >= thisRow && currentRowIdx < nextRow) {
				currentMonthKey = key
				break
			}
		}

		const currentKeyIdx = monthKeys.indexOf(currentMonthKey)
		let targetKey
		if (direction === 'next') {
			targetKey = monthKeys[Math.min(monthKeys.length - 1, currentKeyIdx + 1)]
		} else {
			const currentStartRow = GLOBAL_MONTH_INDEX_MAP[currentMonthKey].rowIndex
			if (currentRowIdx > currentStartRow + 1) {
				targetKey = currentMonthKey
			} else {
				targetKey = monthKeys[Math.max(0, currentKeyIdx - 1)]
			}
		}

		if (targetKey && GLOBAL_MONTH_INDEX_MAP[targetKey]) {
			const targetTop = GLOBAL_MONTH_INDEX_MAP[targetKey].rowIndex * ROW_HEIGHT
			viewportRef.current.scrollTo({ top: targetTop, behavior: 'smooth' })
			currentDisplayMonthRef.current = GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle
			if (monthTitleTextRef.current) {
				monthTitleTextRef.current.textContent = GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle
			}
			setCurrentDisplayMonth(GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle)
		}
	}, [])

	// Direct Month Jump
	const jumpToMonth = useCallback((monthKey) => {
		const month = GLOBAL_MONTH_INDEX_MAP[monthKey]
		if (month && viewportRef.current) {
			viewportRef.current.scrollTo({
				top: month.rowIndex * ROW_HEIGHT,
				behavior: 'smooth',
			})
			currentDisplayMonthRef.current = month.monthTitle
			if (monthTitleTextRef.current) {
				monthTitleTextRef.current.textContent = month.monthTitle
			}
			setCurrentDisplayMonth(month.monthTitle)
		}
		setIsMonthPickerOpen(false)
	}, [])

	// Jump to Today
	const jumpToToday = useCallback(() => {
		if (!viewportRef.current) return
		const d = new Date()
		const currentKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
		const targetKey = GLOBAL_MONTH_INDEX_MAP[currentKey] ? currentKey : '2026-10'

		if (GLOBAL_MONTH_INDEX_MAP[targetKey]) {
			const targetTop = GLOBAL_MONTH_INDEX_MAP[targetKey].rowIndex * ROW_HEIGHT
			viewportRef.current.scrollTo({ top: targetTop, behavior: 'smooth' })
			currentDisplayMonthRef.current = GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle
			if (monthTitleTextRef.current) {
				monthTitleTextRef.current.textContent = GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle
			}
			setCurrentDisplayMonth(GLOBAL_MONTH_INDEX_MAP[targetKey].monthTitle)
		}
	}, [])

	return (
		<>
			{/* CIBS Standard Top Banner */}
			<div className='small-top-banner-container'>
				<Image
					src={cibsBackground_img}
					style={{ objectFit: 'cover' }}
					fill={true}
					alt='Cambridge Kings College Background'
					priority
				/>
				<div className='small-top-outer'>
					<div className='small-top-banner-text-outer'>
						<p>Events Calendar</p>
					</div>
				</div>
			</div>

			{/* Main Content Area */}
			<div className='eventsdemo-page-container'>
				<div className='eventsdemo-outer'>
					{/* Header matching official CIBS branding */}
					<div className='eventsdemo-header-container'>
						<h1 className='eventsdemo-header-title'>EVENTS</h1>
					</div>
					<div className='eventsdemo-thinLine'></div>

					{/* Authentic CIBS Tabs: 2026-27 vs Past Events */}
					<div className='eventsdemo-tabs-container'>
						<div
							className={`events-list-upcoming-cont${activeTab === 0 ? 'S' : 'R'}`}
							onClick={() => setActiveTab(0)}
						>
							2026-27
						</div>
						<div
							className={`events-list-past-cont${activeTab === 1 ? 'S' : 'R'}`}
							onClick={() => setActiveTab(1)}
						>
							Past Events
						</div>
					</div>

					{/* TAB 0: 2026-27 Calendar Presentation */}
					{activeTab === 0 && (
						<div className='eventsdemo-calendar-section'>
							{/* GOOGLE CALENDAR-STYLE EMBEDDED BOX */}
							<div className='eventsdemo-calendar-frame'>
								{/* Top Google Calendar Navigation Bar */}
								<div className='eventsdemo-gcal-topbar'>
									{/* Left: Today, Arrows, Quick Month Jump */}
									<div className='eventsdemo-gcal-left'>
										<button
											type='button'
											className='eventsdemo-today-btn'
											onClick={jumpToToday}
											title='Jump to current term / date'
										>
											Today
										</button>

										<div className='eventsdemo-gcal-arrows'>
											<button
												type='button'
												className='eventsdemo-gcal-arrow-btn'
												onClick={() => navigateMonth('prev')}
												title='Previous month'
												aria-label='Previous month'
											>
												<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
													<polyline points='15 18 9 12 15 6'></polyline>
												</svg>
											</button>
											<button
												type='button'
												className='eventsdemo-gcal-arrow-btn'
												onClick={() => navigateMonth('next')}
												title='Next month'
												aria-label='Next month'
											>
												<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
													<polyline points='9 18 15 12 9 6'></polyline>
												</svg>
											</button>
										</div>

										{/* Month Picker Dropdown Trigger */}
										<div className='eventsdemo-month-picker-container' ref={monthPickerRef}>
											<button
												type='button'
												className='eventsdemo-gcal-month-title-btn'
												onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
												title='Select month'
											>
												<span ref={monthTitleTextRef}>{currentDisplayMonth}</span>
												<span className='eventsdemo-picker-caret'>
													{isMonthPickerOpen ? '▲' : '▼'}
												</span>
											</button>

											{isMonthPickerOpen && (
												<div className='eventsdemo-month-picker-menu'>
													{GLOBAL_MONTH_STARTS.map((m) => (
														<button
															key={m.monthKey}
															type='button'
															className={`eventsdemo-month-picker-item ${
																currentDisplayMonth === m.monthTitle ? 'active' : ''
															}`}
															onClick={() => jumpToMonth(m.monthKey)}
														>
															{m.monthTitle}
														</button>
													))}
												</div>
											)}
										</div>
									</div>

									{/* Right: Category Dropdown & Search */}
									<div className='eventsdemo-gcal-right'>
										{/* Category Filter Dropdown */}
										<div className='eventsdemo-dropdown-container' ref={categoryDropdownRef}>
											<button
												type='button'
												className='eventsdemo-filter-select-btn'
												onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
											>
												<span
													style={{
														width: 7,
														height: 7,
														borderRadius: '50%',
														backgroundColor: currentCategoryObj.color,
														display: 'inline-block',
													}}
												></span>
												<span>{currentCategoryObj.label}</span>
												<span style={{ fontSize: 10, color: '#777' }}>
													({categoryCounts[activeCategory]})
												</span>
												<span style={{ fontSize: 9, color: '#888' }}>
													{isCategoryDropdownOpen ? '▲' : '▼'}
												</span>
											</button>

											{isCategoryDropdownOpen && (
												<div className='eventsdemo-filter-menu'>
													{CATEGORIES.map((cat) => (
														<button
															key={cat.id}
															type='button'
															className={`eventsdemo-filter-menu-item ${
																activeCategory === cat.id ? 'active' : ''
															}`}
															onClick={() => {
																setActiveCategory(cat.id)
																setIsCategoryDropdownOpen(false)
															}}
														>
															<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
																<span
																	style={{
																		width: 6,
																		height: 6,
																		borderRadius: '50%',
																		backgroundColor: cat.color,
																		display: 'inline-block',
																	}}
																></span>
																<span>{cat.label}</span>
															</div>
															<span style={{ fontSize: 10.5, color: '#777' }}>
																{categoryCounts[cat.id]}
															</span>
														</button>
													))}
												</div>
											)}
										</div>

										{/* Compact Search Input */}
										<div className='eventsdemo-gcal-search'>
											<svg className='eventsdemo-search-svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
												<circle cx='11' cy='11' r='8'></circle>
												<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
											</svg>
											<input
												type='text'
												placeholder='Search events...'
												value={searchQuery}
												onChange={(e) => setSearchQuery(e.target.value)}
												aria-label='Search events'
											/>
											{searchQuery && (
												<button
													type='button'
													className='eventsdemo-search-clear-btn'
													onClick={() => setSearchQuery('')}
													title='Clear search'
													aria-label='Clear search'
												>
													×
												</button>
											)}
										</div>
									</div>
								</div>

								{/* Weekday Columns Header (Starting Monday, Ending Sunday) */}
								<div className='eventsdemo-gcal-weekday-grid'>
									<div className='eventsdemo-gcal-weekday-cell'>Mon</div>
									<div className='eventsdemo-gcal-weekday-cell'>Tue</div>
									<div className='eventsdemo-gcal-weekday-cell'>Wed</div>
									<div className='eventsdemo-gcal-weekday-cell'>Thu</div>
									<div className='eventsdemo-gcal-weekday-cell'>Fri</div>
									<div className='eventsdemo-gcal-weekday-cell weekend'>Sat</div>
									<div className='eventsdemo-gcal-weekday-cell weekend'>Sun</div>
								</div>

								{/* Fluid, Buttery 120 FPS Scroll Viewport (Decoupled Passive Scroll) */}
								<div
									className='eventsdemo-calendar-scroll-viewport'
									ref={viewportRef}
								>
									{GLOBAL_CALENDAR_ROWS.map((row) => (
										<CalendarRow
											key={row.rowIndex}
											row={row}
											eventsByDate={eventsByDate}
											todayIso={todayIso}
											onSelectEvent={handleSelectEvent}
											onOpenDayModal={handleOpenDayModal}
										/>
									))}
								</div>
							</div>
						</div>
					)}

					{/* TAB 1: Past Events Presentation (Matched to Options Bar Width 960px) */}
					{activeTab === 1 && (
						<div className='eventsdemo-past-events-section'>
							<UpcomingEventsList />
							<PastEventsList />
						</div>
					)}
				</div>
			</div>

			{/* DAY EVENTS OVERVIEW MODAL: Triggered by "+N more" or clicking a multi-event day */}
			{selectedDayData && (
				<div
					className='eventsdemo-modal-backdrop'
					onClick={() => setSelectedDayData(null)}
				>
					<div
						className='eventsdemo-daymodal-wrapper'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='eventsdemo-daymodal-header'>
							<div>
								<div className='eventsdemo-daymodal-subtitle'>Events on</div>
								<div className='eventsdemo-daymodal-title'>
									{selectedDayData.day.dateNum} {selectedDayData.day.monthName} {selectedDayData.day.year}
								</div>
							</div>
							<button
								type='button'
								className='eventsdemo-daymodal-close-btn'
								onClick={() => setSelectedDayData(null)}
								aria-label='Close'
							>
								✕
							</button>
						</div>

						<div className='eventsdemo-daymodal-body'>
							{selectedDayData.events.map((evt) => (
								<div
									key={evt.id}
									className='eventsdemo-daymodal-item'
									onClick={() => {
										setSelectedDayData(null)
										setSelectedEvent(evt)
									}}
								>
									<div className='eventsdemo-daymodal-item-left'>
										<span
											className='eventsdemo-daymodal-dot'
											style={{ backgroundColor: evt.categoryColor }}
										/>
										<div className='eventsdemo-daymodal-item-info'>
											<div className='eventsdemo-daymodal-item-title'>{evt.title}</div>
											<div className='eventsdemo-daymodal-item-meta'>
												<span
													className='eventsdemo-daymodal-cat-tag'
													style={{ color: evt.categoryColor }}
												>
													{evt.categoryLabel}
												</span>
											</div>
										</div>
									</div>
									<button
										type='button'
										className='eventsdemo-daymodal-view-btn'
									>
										View details →
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* FULL EVENT DETAILS MODAL: Shows when clicking on any event tile */}
			{selectedEvent && (
				<div
					className='eventsdemo-modal-backdrop'
					onClick={() => setSelectedEvent(null)}
				>
					<div
						className='eventsdemo-modal-wrapper'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							type='button'
							className='eventsdemo-modal-close-btn'
							onClick={() => setSelectedEvent(null)}
							aria-label='Close event details'
						>
							✕
						</button>

						{/* Exact CIBS Event Card Styling */}
						<div className='eventsdemo-modal-card'>
							{/* Poster Image - Fills entire box and centered */}
							<div className='eventsdemo-modal-img-container'>
								<Image
									src={selectedEvent.image}
									style={{
										objectFit: selectedEvent.id === 'termcard-pjt' ? 'contain' : 'cover',
										objectPosition: 'center',
									}}
									fill={true}
									alt={selectedEvent.title}
								/>
							</div>

							{/* Date Box in top right corner */}
							<div className='eventsdemo-modal-date-box'>
								<div className='eventsdemo-modal-date-month'>{selectedEvent.month}</div>
								<div className='eventsdemo-modal-date-day'>{selectedEvent.day}</div>
							</div>

							{/* Text & Content Container */}
							<div className='eventsdemo-modal-text-container'>
								<div className='eventsdemo-modal-meta-row'>
									<span
										className='eventsdemo-modal-category-chip'
										style={{ backgroundColor: selectedEvent.categoryColor }}
									>
										{selectedEvent.categoryLabel}
									</span>
									<span className='eventsdemo-modal-term-chip'>
										{selectedEvent.dateKey}
									</span>
								</div>

								<div className='eventsdemo-modal-title'>{selectedEvent.title}</div>

								<div className='eventsdemo-modal-description'>
									{selectedEvent.description}
								</div>

								<div className='eventsdemo-modal-btn-outer'>
									<div
										className='eventsdemo-modal-btn'
										onClick={(e) => {
											e.stopPropagation()
											window.open(selectedEvent.link, '_blank')
										}}
									>
										Learn more
									</div>
									<button
										type='button'
										className='eventsdemo-modal-dismiss-btn'
										onClick={() => setSelectedEvent(null)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
