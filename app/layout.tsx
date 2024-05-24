import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/footer'
import Cta from '@/components/cta'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	title: 'Womans Shop',
	description: 'This is womans shopping dress',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<ToastContainer></ToastContainer>
				<Navbar></Navbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
