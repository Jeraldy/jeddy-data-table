import Table from "jeddy/dom/Table";
import WThead from "./WThead";
import WBody from "./WBody";

export default (params) => {
    const { args, state } = params
    return Table({
        children: [
            WThead(args.header),
            WBody(state.data, args)
        ],
        style: { borderCollapse: 'collapse', width: '100%'},
    })
}