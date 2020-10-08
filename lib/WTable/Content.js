"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Table_1 = require("jeddy/dom/Table");
const WThead_1 = require("./WThead");
const WBody_1 = require("./WBody");
exports.default = (params) => {
    const { args, state } = params;
    const { footer, header } = args;
    return Table_1.default({
        children: [
            WThead_1.default(header),
            WBody_1.default(state.data, args),
            footer || null
        ],
        style: { borderCollapse: 'collapse', width: '100%' },
    });
};
//# sourceMappingURL=Content.js.map