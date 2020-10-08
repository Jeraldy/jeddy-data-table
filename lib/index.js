"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jredux_1 = require("jeddy/jredux");
const RLib_1 = require("./RLib");
const WLib_1 = require("./WLib");
const InternalWidget = (args) => {
    const { name } = args || {};
    if (!name) {
        throw Error("You must provide a unique name for this widget..! Eg. name:'myUniqueName'");
    }
    let cloneData = [...args.data];
    let display = args.display || 10;
    let _RLib = RLib_1.default({
        name,
        initialState: {
            data: cloneData.splice(0, display),
            _data: cloneData,
            start: 0,
            display
        }
    });
    const { actions } = _RLib;
    const state = jredux_1.register({ [name]: _RLib.reducer });
    return WLib_1.default({ state: state[name] || {}, actions, args });
};
const ExposedWidget = (params) => InternalWidget(params);
exports.default = ExposedWidget;
//# sourceMappingURL=index.js.map