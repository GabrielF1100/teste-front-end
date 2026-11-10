import CategoryList from './components/CategoryList/CategoryList'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductSection from './components/ProductSection/ProductSection'
import { useProducts } from './hooks/useProducts'

const productTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export default function App() {
  const { products, loading, error } = useProducts()

  // O modal de detalhes é ligado na próxima etapa
  const handleSelectProduct = () => undefined

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
          onSelectProduct={handleSelectProduct}
        />
      </main>
    </>
  )
}
