"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("jeddy/dom/Div");
const Row_1 = require("jeddy/layouts/Row");
const A_1 = require("jeddy/dom/A");
const RowAlignment_1 = require("jeddy/layouts/RowAlignment");
const jredux_1 = require("jeddy/jredux");
const arrow_left_png_1 = require("./../Assets/arrow_left.png");
const arrow_right_png_1 = require("./../Assets/arrow_right.png");
const Img_1 = require("jeddy/dom/Img");
const Span_1 = require("jeddy/dom/Span");
exports.default = (params) => {
    const { actions, state } = params;
    let start = state.start;
    let end = start + state.display;
    let totalCount = state._data.length;
    if (end > totalCount) {
        end = totalCount;
    }
    return Div_1.default({
        children: [
            Row_1.default({
                children: [
                    Div_1.default({
                        children: [
                            `Showing ${start + 1} to ${end} of `,
                            Span_1.default({
                                children: [totalCount.toLocaleString()],
                                style: { color: '#03A9F4' }
                            }),
                            " entries"
                        ],
                        style: {
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            color: '#A39696'
                        }
                    }),
                    Div_1.default({
                        children: [
                            A_1.default({
                                children: [
                                    Img_1.default({
                                        src: arrow_left_png_1.default,
                                        style: { marginTop: '6px', marginLeft: '2px', height: '20px', width: '20px' }
                                    }),
                                ],
                                href: "#",
                                onClick: () => jredux_1.dispatch(actions.filterPrev()),
                            }),
                            A_1.default({
                                children: [
                                    Img_1.default({
                                        src: arrow_right_png_1.default,
                                        style: { marginTop: '6px', marginLeft: '2px', height: '20px', width: '20px' }
                                    }),
                                ],
                                href: "#",
                                style: { marginLeft: '8px' },
                                onClick: () => jredux_1.dispatch(actions.filterNext())
                            })
                        ]
                    }),
                ],
                align: RowAlignment_1.default.SpaceBetween
            })
        ],
        style: {
            padding: '8px',
            color: "#616161",
            border: '1px solid #ddd',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
        }
    });
};
//# sourceMappingURL=BottomBar.js.map