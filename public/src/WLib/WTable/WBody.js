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
import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Tbody from "jeddy/dom/Tbody";
export default (function (data, args) {
    var iterator = args.iterator;
    return Tbody({
        children: TableContent(data, iterator),
        style: { borderBottom: '2px solid black', color: "#616161" }
    });
});
var tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
};
function TableContent(data, iterator) {
    return data.map(function (row, index) {
        var rowClone = __assign({}, row);
        rowClone = iterator(rowClone, index);
        return Tr({
            children: rowClone.rowData.map(function (d) {
                if (typeof d == "number") {
                    return Td({ children: [d.toString()], style: tdStyle });
                }
                return Td({ children: [d], style: tdStyle });
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        });
    });
}
