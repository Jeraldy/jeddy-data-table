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
import Thead from "jeddy/dom/Thead";
import Tr from "jeddy/dom/Tr";
import Th from "jeddy/dom/Th";
var thStyle = {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid #ddd'
};
export default (function (header) {
    return Thead({
        children: [
            Tr({
                children: header.map(function (head) {
                    return Th({
                        children: [head.title],
                        style: __assign(__assign({}, head.style), thStyle)
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
});
