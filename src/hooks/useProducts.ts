import { useEffect, useState } from 'react'
import type { Product, ProductsResponse } from '../types/product'

export const OFFICIAL_PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

// Usa o proxy configurado no vite.config.ts em dev/preview
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

    async function fetchJson(endpoint: string): Promise<ProductsResponse> {
      const response = await fetch(endpoint, { signal: controller.signal })
      if (!response.ok) throw new Error(`Erro ao carregar produtos (${response.status})`)
      return response.json()
    }

    async function load() {
      try {
        let data: ProductsResponse
        try {
          data = await fetchJson(url)
        } catch {
          // Fallback local caso a API bloqueie por CORS fora do Vite
          data = await fetchJson('/produtos.json')
        }

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
