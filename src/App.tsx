import { useState } from 'react'
import BrandList from './components/BrandList/BrandList'
import CategoryList from './components/CategoryList/CategoryList'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Newsletter from './components/Newsletter/Newsletter'
import ProductModal from './components/ProductModal/ProductModal'
import ProductSection from './components/ProductSection/ProductSection'
import PromoBanners from './components/PromoBanners/PromoBanners'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

const productTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export default function App() {
  const { products, loading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Props comuns às três vitrines de produtos
  const shelf = {
    title: 'Produtos relacionados',
    products,
    loading,
    error,
    onSelectProduct: setSelectedProduct,
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryList />
        <ProductSection id="produtos" tabs={productTabs} {...shelf} />
        <PromoBanners />
        <ProductSection {...shelf} />
        <PromoBanners />
        <BrandList />
        <ProductSection {...shelf} />
        <Newsletter />
      </main>
      <Footer />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
