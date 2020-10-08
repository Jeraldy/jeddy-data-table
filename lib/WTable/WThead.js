"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Thead_1 = require("jeddy/dom/Thead");
const Tr_1 = require("jeddy/dom/Tr");
const Th_1 = require("jeddy/dom/Th");
const thStyle = {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid #ddd'
};
exports.default = (header) => {
    return Thead_1.default({
        children: [
            Tr_1.default({
                children: header.map((head) => {
                    return Th_1.default({
                        children: [head.title],
                        style: Object.assign(Object.assign({}, head.style), thStyle),
                        scope: "col"
                    });
                }),
                style: {
                    backgroundColor: '#F3F3F3',
                    fontSize: "15px",
                    borderBottom: '2px solid black',
                    color: '#212121'
                }
            })
        ]
    });
};
//# sourceMappingURL=WThead.js.map