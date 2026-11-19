



import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlide'
import { cartSlice } from './features/cart/cardSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            [counterSlice.reducerPath]: counterSlice.reducer,
            [cartSlice.reducerPath] : cartSlice.reducer
        },
        devTools: false
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
