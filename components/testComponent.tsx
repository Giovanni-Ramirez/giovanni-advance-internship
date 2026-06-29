'use client'

import type { RootState } from '@/store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import { authModalToggle } from '@/store/slice' // Imports your new toggle action

export default function TestComponent() {
    const isToggled = useSelector((state: RootState) => state.authModalToggle.status)
    const dispatch = useDispatch()

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>

            <p>Current Status: {isToggled ? 'ON' : 'OFF'}</p>
            
            <button onClick={() => dispatch(authModalToggle())}>
                Toggle Value
            </button>
        </div>
    )
}