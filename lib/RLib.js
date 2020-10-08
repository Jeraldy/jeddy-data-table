"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jredux_1 = require("jeddy/jredux");
const Slice = (params) => jredux_1.createReducer({
    name: params.name,
    initialState: params.initialState,
    reducers: {
        filterTable(state, action) {
            let data = [];
            state._data.forEach((row) => {
                const keys = Object.keys(row);
                for (var i in keys) {
                    if (row[keys[i]] && typeof row[keys[i]] != 'object') {
                        if (row[keys[i]]
                            .toString()
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())) {
                            data.push(row);
                            break;
                        }
                    }
                }
            });
            data = data.splice(0, state.display);
            return Object.assign(Object.assign({}, state), { data });
        },
        filterPrev(state) {
            let _start = state.start;
            let end = _start - state.display;
            let clonedData = [...state._data];
            if (end < 0) {
                end = 0;
            }
            const data = clonedData.splice(end, state.display);
            if (data.length == 0) {
                return Object.assign({}, state);
            }
            return Object.assign(Object.assign({}, state), { data: data, start: end });
        },
        filterNext(state) {
            let _start = state.start;
            let end = _start + state.display;
            const counts = state._data.length;
            let clonedData = [...state._data];
            if (end > counts) {
                end = counts;
            }
            const data = clonedData.splice(end, state.display);
            if (data.length == 0) {
                return Object.assign({}, state);
            }
            return Object.assign(Object.assign({}, state), { data: data, start: end });
        }
    }
});
exports.default = (params) => Slice(params);
//# sourceMappingURL=RLib.js.map