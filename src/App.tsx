import { useState } from 'react'
import CategoryList from './components/CategoryList/CategoryList'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductModal from './components/ProductModal/ProductModal'
import ProductSection from './components/ProductSection/ProductSection'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

const productTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export default function App() {
  const { products, loading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryList />
        <ProductSection
          id="produtos"
          title="Produtos relacionados"
          tabs={productTabs}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={setSelectedProduct}
        />
      </main>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
