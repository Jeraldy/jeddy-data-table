"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tr_1 = require("jeddy/dom/Tr");
const Td_1 = require("jeddy/dom/Td");
const Tbody_1 = require("jeddy/dom/Tbody");
exports.default = (data, args) => {
    const { iterator } = args;
    return Tbody_1.default({
        children: TableContent(data, iterator),
        style: { borderBottom: '2px solid black', color: "#616161" }
    });
};
const tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
};
function TableContent(data, iterator) {
    return data.map((row, index) => {
        let rowClone = Object.assign({}, row);
        rowClone = iterator(rowClone, index);
        return Tr_1.default({
            children: rowClone.rowData.map((d) => {
                if (typeof d == "number") {
                    return Td_1.default({ children: [d.toString()], style: tdStyle });
                }
                return Td_1.default({ children: [d], style: tdStyle });
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        });
    });
}
//# sourceMappingURL=WBody.js.map