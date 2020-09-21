import { createReducer } from "jeddy/jredux";

const checkboxR = createReducer({
    name: 'checkboxR',
    initialState: {
        checked: true,
    },
    reducers: {
        toggleCheckbox(state) {
            return {
                ...state,
                checked: !state.checked
            }
        },
    }
})

export const { reducer, actions } = checkboxR;

