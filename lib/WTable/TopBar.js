"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("jeddy/dom/Div");
const TextInput_1 = require("jeddy/dom/TextInput");
const Row_1 = require("jeddy/layouts/Row");
const RowAlignment_1 = require("jeddy/layouts/RowAlignment");
const jredux_1 = require("jeddy/jredux");
const search_png_1 = require("./../Assets/search.png");
const Img_1 = require("jeddy/dom/Img");
exports.default = (params) => {
    const { args, actions } = params;
    const { searchable, actionItems } = args;
    return Div_1.default({
        children: [
            Row_1.default({
                children: [
                    Div_1.default({ children: actionItems || [], style: { margin: 'auto 0' } }),
                    searchable ? searchContainer(actions) : null
                ],
                align: RowAlignment_1.default.SpaceBetween
            })
        ],
    });
};
function searchContainer(actions) {
    return Div_1.default({
        children: [
            Row_1.default({
                children: [
                    Img_1.default({
                        src: search_png_1.default,
                        style: {
                            marginTop: '6px',
                            marginLeft: '2px',
                            height: '20px',
                            width: '20px'
                        }
                    }),
                    TextInput_1.default({
                        onKeyUp: (e) => jredux_1.dispatch(actions.filterTable(e.target.value)),
                        style: {
                            border: 'none',
                            outline: 'none',
                            borderRadius: '4px',
                            padding: '8px'
                        },
                        placeholder: 'Search...'
                    })
                ],
                wrapContent: false
            })
        ],
        style: {
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '4px'
        }
    });
}
//# sourceMappingURL=TopBar.js.map