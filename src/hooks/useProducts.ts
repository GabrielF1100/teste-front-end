import { useEffect, useState } from 'react'
import type { Product, ProductsResponse } from '../types/product'

// Endpoint original:
// https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
// Sem CORS no servidor, por isso a chamada passa pelo proxy do Vite (vite.config.ts).
export const PRODUCTS_URL = '/api/produtos'

interface State {
  products: Product[]
  loading: boolean
  error: string | null
}

export function useProducts(url: string = PRODUCTS_URL): State {
  const [state, setState] = useState<State>({ products: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(`Erro ao carregar produtos (${response.status})`)

        const data: ProductsResponse = await response.json()
        if (!data.success) throw new Error('A API não retornou os produtos')

        const products = data.products.map((product, index) => ({ ...product, id: index }))
        setState({ products, loading: false, error: null })
      } catch (error) {
        if (controller.signal.aborted) return
        const message = error instanceof Error ? error.message : 'Erro desconhecido'
        setState({ products: [], loading: false, error: message })
      }
    }

    load()
    return () => controller.abort()
  }, [url])

  return state
}
