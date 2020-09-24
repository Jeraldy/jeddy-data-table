import Table from "jeddy/dom/Table";
import WThead from "./WThead";
import WBody from "./WBody";
export default (function (params) {
    var args = params.args, state = params.state;
    var footer = args.footer, header = args.header;
    return Table({
        children: [
            WThead(header),
            WBody(state.data, args),
            footer || null
        ],
        style: { borderCollapse: 'collapse', width: '100%' },
    });
});
