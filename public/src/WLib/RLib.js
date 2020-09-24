var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { createReducer } from "jeddy/jredux";
var Slice = function (params) { return createReducer({
    name: params.name,
    initialState: params.initialState,
    reducers: {
        filterTable: function (state, action) {
            var data = [];
            state._data.forEach(function (row) {
                var keys = Object.keys(row);
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
            return __assign(__assign({}, state), { data: data });
        },
        filterPrev: function (state) {
            var _start = state.start;
            var end = _start - state.display;
            var clonedData = __spreadArrays(state._data);
            if (end < 0) {
                end = 0;
            }
            var data = clonedData.splice(end, state.display);
            if (data.length == 0) {
                return __assign({}, state);
            }
            return __assign(__assign({}, state), { data: data, start: end });
        },
        filterNext: function (state) {
            var _start = state.start;
            var end = _start + state.display;
            var counts = state._data.length;
            var clonedData = __spreadArrays(state._data);
            if (end > counts) {
                end = counts;
            }
            var data = clonedData.splice(end, state.display);
            if (data.length == 0) {
                return __assign({}, state);
            }
            return __assign(__assign({}, state), { data: data, start: end });
        }
    }
}); };
export default (function (params) { return Slice(params); });
