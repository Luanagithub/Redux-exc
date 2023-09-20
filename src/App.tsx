//import { useEffect, useState } from 'react'
import { Provider } from 'react-redux/es/exports'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'
import { GlobalStyle } from './styles'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    //Provider com informação da store para sintetizar
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
