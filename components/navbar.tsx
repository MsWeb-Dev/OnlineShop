'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<header className='flex items-center px-4 py-2 md:px-8 md:py-4 justify-between fixed top-0 w-full shadow bg-white z-50'>
			<Link href='/' className='text-xl md:text-2xl font-bold'>
				Shopping
			</Link>
			<div className='flex items-center space-x-2.5 text-sm'>
				<nav className='hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center'>
					<Link href='/' className='mr-5 hover:text-gray-900'>Home</Link>
					<Link href='/products' className='mr-5 hover:text-gray-900'>All Product</Link>
					<Link href='/contact' className='mr-5 hover:text-gray-900'>Contact</Link>
				</nav>
				<Link href='/shopping-cart'>
					<button className='button bg-blue-700 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
						MY BAG
					</button>
				</Link>
			</div>
			{/* Mobile Menu */}
			<div className='block md:hidden'>
				<button onClick={toggleMobileMenu} className='button bg-blue-700 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
					Menu
				</button>
				{/* Hidden by default, shown when the button is clicked */}
				<div className={`${mobileMenuOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-white shadow-lg rounded-lg`}>
					<nav className='flex flex-col p-4'>
						<Link href='/' className='mb-2 hover:text-gray-900' onClick={toggleMobileMenu}>Home</Link>
						<Link href='/products' className='mb-2 hover:text-gray-900' onClick={toggleMobileMenu}>All Product</Link>
						<Link href='/contact' className='mb-2 hover:text-gray-900' onClick={toggleMobileMenu}>Contact</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
