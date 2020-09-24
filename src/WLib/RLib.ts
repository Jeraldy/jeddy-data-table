import { createReducer } from "jeddy/jredux";

const Slice = (params: { name: string, initialState: {} }) => createReducer({
    name: params.name,
    initialState: params.initialState,
    reducers: {
        filterTable(state: any, action: any) {
            let data: any[] = []
            state._data.forEach((row: any) => {
                const keys = Object.keys(row)
                for (var i in keys) {
                    if (row[keys[i]] && typeof row[keys[i]] != 'object') {
                        if (row[keys[i]]
                            .toString()
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())) {
                            data.push(row)
                            break
                        }
                    }
                }
            })
            data = data.splice(0, state.display)
            return { ...state, data }
        },
        filterPrev(state: any) {
            let _start = state.start;
            let end = _start - state.display;
            let clonedData = [...state._data]
            if (end < 0) {
                end = 0
            }
            const data = clonedData.splice(end, state.display)
            if (data.length == 0) {
                return { ...state }
            }
            return { ...state, data: data, start: end }
        },
        filterNext(state: any) {
            let _start = state.start;
            let end = _start + state.display;
            const counts = state._data.length
            let clonedData = [...state._data]

            if (end > counts) {
                end = counts
            }
            const data = clonedData.splice(end, state.display)
            if (data.length == 0) {
                return { ...state }
            }
            return { ...state, data: data, start: end }
        }
    }
})

export default (params: { name: string, initialState: {} }) => Slice(params);