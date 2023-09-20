import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  //Criar fatia
  name: 'carrinho',
  //Estado inicial do reducer
  initialState,
  reducers: {
    //Reducer
    //Parte de mudança de estado
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      //Condição da função, usando a array do estado(state.itens)
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        //Modificar o action => Store
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
