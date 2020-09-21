import Div from "jeddy/dom/Div"
import TopBar from "./TopBar"
import Content from "./Content"
import BottomBar from "./BottomBar"

export default (params) => {
    return Div({
        children: [
            TopBar(params),
            Content(params),
            BottomBar(params)
        ],
        style: {
            //border: '1px solid #ddd',
            borderRadius: '4px',
            borderTop: 'none',
            display: 'inline-block',
            width: '100%'
        }
    })
}