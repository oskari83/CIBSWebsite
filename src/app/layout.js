import './globals.css'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

export const metadata = {
  title: 'CIBS - Cambridge Investment Banking Society',
  description: `The University of Cambridge's Investment Banking Society (CIBS) provides opportunities to learn more about careers in the industry and build long-lasting relationships with industry professionals.`,
}

export default function RootLayout({ children }) {
  	return (
    <html lang="en">
      	<body>
			<Navbar />
			{children}
			<Footer />
		</body>
    </html>
  	)
}
