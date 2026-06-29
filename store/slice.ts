import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
    status: boolean
}

const initialState: ToggleState = {
    status: false,
}

export const toggleSlice = createSlice({
    name: 'authModalToggle',
    initialState,
    reducers: {
        authModalToggle: (state) => {
            if(state.status === true) {
                document.body.classList.remove('modal-open');
            } else {
                document.body.classList.add('modal-open');
            }
            state.status = !state.status
        },
    },
})

export const { authModalToggle } = toggleSlice.actions

export default toggleSlice.reducer