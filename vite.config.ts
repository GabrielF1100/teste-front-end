import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// O endpoint público de produtos não envia cabeçalhos CORS, então o navegador
// bloqueia a chamada direta. Em dev/preview a aplicação chama `/api/produtos`
// (mesma origem) e o Vite repassa a requisição ao endereço original.
const productsProxy = {
  '/api/produtos': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { proxy: productsProxy },
  preview: { proxy: productsProxy },
})
