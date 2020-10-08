import Table from "jeddy/dom/Table";
import WThead from "./WThead";
import WBody from "./WBody";

export default (params) => {
    const { args, state } = params
    const { footer, header } = args
    return Table({
        children: [
            WThead(header),
            WBody(state.data, args),
            footer || null
        ],
        style: { borderCollapse: 'collapse', width: '100%' },
    })
}