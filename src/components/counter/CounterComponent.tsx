'use client'

import { decrement, increment, incrementByAmount } from '@/redux/features/counter/counterSlide'
import { useAppDispatch} from '@/redux/hook'

export default function CounterComponent() {
const dispatch = useAppDispatch();
  return (
    <section>
        <button className='bg-blue-600 text-white p-3 border cursor-pointer' onClick={() => dispatch(increment())}>Increment</button>
        <button className='bg-amber-400 text-white p-3 border cursor-pointer ' onClick={() => dispatch(decrement())}>Decrement</button>
        {/* <button className='bg-green-400 text-white p-3 border cursor-pointer ' onClick={() => dispatch(incrementByAmount(5))}>Increment by amount(+5)</button> */}
    </section>
  )
}
