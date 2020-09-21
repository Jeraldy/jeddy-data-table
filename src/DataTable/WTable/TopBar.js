import Div from "jeddy/dom/Div";
import TextInput from "jeddy/dom/TextInput";
import Row from "jeddy/layouts/Row";
import RowAlignment from "jeddy/layouts/RowAlignment";
import { dispatch } from "jeddy/jredux";
import Icon from "jeddy/widgets/Icon";
import Icons from "jeddy/utils/Icons";

export default (params) => {
    const { args, state, actions } = params
    return Div({
        children: [
            Row({
                children: [
                    Div(),
                    Div({
                        children: [
                            Row({
                                children: [
                                    Icon({
                                        name: Icons.search,
                                        style:{
                                            marginTop: '4px',
                                            marginLeft:'2px'
                                        }
                                    }),
                                    TextInput({
                                        onKeyUp: (e) => dispatch(actions.filterTable(e.target.value)),
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
                            borderRadius: '4px'
                        }
                    })
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: {
            padding: '4px'
        }
    })
}