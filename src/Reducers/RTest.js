import { createReducer } from "jeddy/jredux";
import data from "../MockData";

const RTest = createReducer({
    name: 'RTest',
    initialState: { data: data },
    reducers: {
        handleChange(state, action) {
            return { data: []}
        }
    }
})

export const { reducer, actions } = RTest;

