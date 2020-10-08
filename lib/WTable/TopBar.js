import Div from "jeddy/dom/Div";
import TextInput from "jeddy/dom/TextInput";
import Row from "jeddy/layouts/Row";
import RowAlignment from "jeddy/layouts/RowAlignment";
import { dispatch } from "jeddy/jredux";
import SearchIcon from "./../Assets/search.png";
import Img from "jeddy/dom/Img";

export default (params) => {
    const { args, actions } = params
    const { searchable, actionItems } = args
    return Div({
        children: [
            Row({
                children: [
                    Div({ children: actionItems || [], style: { margin: 'auto 0' } }),
                    searchable ? searchContainer(actions) : null
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
    })
}

function searchContainer(actions) {
    return Div({
        children: [
            Row({
                children: [
                    Img({
                        src: SearchIcon,
                        style: {
                            marginTop: '6px',
                            marginLeft: '2px',
                            height: '20px',
                            width: '20px'
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
            borderRadius: '4px',
            marginBottom: '4px'
        }
    })
}