"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tr_1 = require("jeddy/dom/Tr");
const Td_1 = require("jeddy/dom/Td");
const Tbody_1 = require("jeddy/dom/Tbody");
exports.default = (data, args) => {
    const { iterator, header } = args;
    return Tbody_1.default({
        children: TableContent(data, iterator, header),
        style: { borderBottom: '2px solid black', color: "#616161" }
    });
};
const tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
};
function TableContent(data, iterator, header) {
    return data.map((row, index) => {
        let rowClone = Object.assign({}, row);
        rowClone = iterator(rowClone, index);
        return Tr_1.default({
            children: rowClone.rowData.map((d, i) => {
                let title = typeof header[i].title == "object" ? "" : header[i].title;
                if (i == 0) {
                    if (typeof d == "number") {
                        return Td_1.default({ children: [d.toString()], style: tdStyle, 'data-label': title, scope: "row" });
                    }
                    return Td_1.default({ children: [d], style: tdStyle, scope: "row", 'data-label': title });
                }
                else {
                    if (typeof d == "number") {
                        return Td_1.default({ children: [d.toString()], style: tdStyle, 'data-label': title });
                    }
                    return Td_1.default({ children: [d], style: tdStyle, 'data-label': title });
                }
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        });
    });
}
//# sourceMappingURL=WBody.js.map