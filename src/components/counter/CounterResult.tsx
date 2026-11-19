
"use client"

import { useAppSelector } from '@/redux/hook'

export default function CounterResult() {
    const count = useAppSelector(state => state.counter.value)

    return (

      <div className='w-[408px]'>
        <h1 className="bg-red-500 text-4xl text-center">
            Counter: {count}
        </h1>
      </div>
    )
}
