import { ProductType } from '@/interface'
import Product from '../components/product'
import Hero from '@/components/hero'
import Cta from '@/components/cta'
import Statistics from '@/components/statistics'

export default async function Home() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products:ProductType[] = await res.json()

    return (
        <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 '>
          <Hero></Hero>
            <section className='flex flex-col space-y-12 '>
                <h1 className='text-5xl font-bold text-center'>Woman Shop</h1>
            </section>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl-gap-x-8'>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Cta></Cta>
            <Statistics></Statistics>
        </main>
    )
}
