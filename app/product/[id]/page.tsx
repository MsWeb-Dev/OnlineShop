import CustomImage from '@/components/image'
import { notFound } from 'next/navigation'

interface Props{
	params:{
		id:string
	};
}

const ProductDetailPage=async({params:{id}}:Props)=>{
	try {
		const res = await fetch(
			`https://fakestoreapi.com/products/${id}`
		)
		const product = await res.json()
return(
	<div className="max-w-5xl  mx-auto  flex flex-col  md:flex-row items-center gap-8 px-4  mt-48 pb-10">
		<CustomImage product={product}></CustomImage>
	</div>
)
		
	} catch (error) {
		notFound()
	}
}