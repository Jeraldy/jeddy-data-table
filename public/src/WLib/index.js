var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { register } from "jeddy/jredux";
import RLib from "./RLib";
import WLib from "./WLib";
var InternalWidget = function (args) {
    var _a;
    var name = (args || {}).name;
    if (!name) {
        throw Error("You must provide a unique name for this widget..! Eg. name:'myUniqueName'");
    }
    var cloneData = __spreadArrays(args.data);
    var display = args.display || 10;
    var _RLib = RLib({
        name: name,
        initialState: {
            data: cloneData.splice(0, display),
            _data: cloneData,
            start: 0,
            display: display
        }
    });
    var actions = _RLib.actions;
    var state = register((_a = {}, _a[name] = _RLib.reducer, _a));
    return WLib({ state: state[name] || {}, actions: actions, args: args });
};
var ExposedWidget = function (params) { return InternalWidget(params); };
export default ExposedWidget;
