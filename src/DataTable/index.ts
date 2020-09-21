import { register } from "jeddy/jredux";
import * as CSS from "jeddy/css/index";
import RLib from "./RLib";
import WLib from "./WLib";

const InternalWidget = (args: any) => {
    const { name } = args || {}
    if (!name) {
        throw Error("You must provide a unique name for this widget..! Eg. name:'myUniqueName'")
    }
    let cloneData = [...args.data]
    // cloneData = cloneData.map((row, index) => {
    //     let _row = { ...row, tableIndex: index + 1 }
    //     return _row
    // })
    let display = args.display || 10
    let _RLib = RLib({
        name,
        initialState: {
            data: cloneData.splice(0, display),
            _data: cloneData,
            start: 0,
            display
        }
    })
    const { actions } = _RLib
    const state = register({ [name]: _RLib.reducer })
    return WLib({ state: state[name] || {}, actions, args })
}

const ExposedWidget = (params: {
    name: string,
    data: Array<{}>,
    display?: number,
    header: Array<{ title: any, style?: {} }>,
    iterator: (row: {}, index: number) => { rowData: [], rowStyle?: CSS.Properties }
}) => InternalWidget(params)

export default ExposedWidget;