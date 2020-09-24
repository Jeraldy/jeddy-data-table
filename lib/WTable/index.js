"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("jeddy/dom/Div");
const TopBar_1 = require("./TopBar");
const Content_1 = require("./Content");
const BottomBar_1 = require("./BottomBar");
exports.default = (params) => {
    return Div_1.default({
        children: [
            TopBar_1.default(params),
            Content_1.default(params),
            BottomBar_1.default(params)
        ],
        style: {
            //border: '1px solid #ddd',
            borderRadius: '4px',
            borderTop: 'none',
            display: 'inline-block',
            width: '100%'
        }
    });
};
//# sourceMappingURL=index.js.map