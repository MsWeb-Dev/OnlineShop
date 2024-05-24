import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<header className='flex items-center px-8 py-4 md:px-12 justify-between fixed top-0 w-full shadow bg-white z-50'>
		
			<Link href={'/'}>
				<Image src={'/logo.svg'} alt='logo' width={150} height={40}></Image>
			</Link>
			
			<div className='flex items-center space-x-2.5 text-sm'>
			<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
				<Link  href={'/'} className='mr-5 hover:text-gray-900'>Homepage</Link>
				<Link href={'allproduct'} className='mr-5 hover:text-gray-900'>All Product</Link>
			
			</nav>
				<button className='button bg-blue-700 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
					Login{' '}
				</button>
				<button className='button bg-transparent border-blue-700 hover:transparent hover:bg-blue-600 hover:text-white'>
					Sign Up{' '}
				</button>
			</div>
		</header>
	)
}

export default Navbar
