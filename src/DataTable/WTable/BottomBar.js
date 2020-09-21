import Div from "jeddy/dom/Div"
import Row from "jeddy/layouts/Row"
import A from "jeddy/dom/A"
import RowAlignment from "jeddy/layouts/RowAlignment"
import { dispatch } from "jeddy/jredux"
import Icon from "jeddy/widgets/Icon"
import Icons from "jeddy/utils/Icons"
import Span from "jeddy/dom/Span";

export default (params) => {
    const { actions, state } = params
    let start = state.start;
    let end = start + state.display;
    let totalCount = state._data.length
    if (end > totalCount) {
        end = totalCount
    }
    return Div({
        children: [
            Row({
                children: [
                    Div({
                        children: [
                            `Showing ${start + 1} to ${end} of `,
                            Span({
                                children: [totalCount.toLocaleString()],
                                style: { color: '#03A9F4' }
                            }),
                            " entries"],
                        style: {
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            color: '#A39696'
                        }
                    }),
                    Div({
                        children: [
                            A({
                                children: [
                                    Icon({
                                        name: Icons.keyboard_arrow_left
                                    })
                                ],
                                href: "#",
                                onClick: () => dispatch(actions.filterPrev()),
                            }),
                            A({
                                children: [
                                    Icon({
                                        name: Icons.keyboard_arrow_right
                                    })
                                ],
                                href: "#",
                                style: { marginLeft: '8px' },
                                onClick: () => dispatch(actions.filterNext())
                            })
                        ]
                    }),
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: {
            padding: '8px',
            color: "#616161",
            border: '1px solid #ddd',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
        }
    })
}