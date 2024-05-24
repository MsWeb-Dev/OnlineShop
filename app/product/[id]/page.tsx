import CustomImage from '@/components/image'
import { notFound } from 'next/navigation'

interface Props {
	params: {
		id: string
	}
}

const ProductDetailPage = async ({ params: { id } }: Props) => {
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`)
		const product = await res.json()
		return (
			<div className='max-w-5xl  mx-auto  flex flex-col  md:flex-row items-center gap-8 px-4  mt-48 pb-10'>
				<CustomImage product={product}></CustomImage>
				<div className='divedi-2'>
					<div className='space-y-2 px-6'>
						<h2 className='text-2xl md:text-4xl font-bold'>{product.title}</h2>
						<h2 className='text-gray-400 text-xl md:text-3xl font-bold'>${product.price}</h2>

					</div>

					<div className="pt-5">
						<p className="text-xl md-text-sm">{product.description}</p>
					</div>
				</div>
			</div>
		)
	} catch (error) {
		notFound()
	}
}

export default ProductDetailPage
