import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Tbody from "jeddy/dom/Tbody";

export default (data, args) => {
    const { iterator } = args
    return Tbody({
        children: TableContent(data, iterator),
        style: { borderBottom: '2px solid black', color: "#616161" }
    })
}

const tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
}

function TableContent(data, iterator) {
    return data.map((row, index) => {
        let rowClone = { ...row }
        rowClone = iterator(rowClone, index)
        return Tr({
            children: rowClone.rowData.map((d) => {
                if (typeof d == "number") {
                    return Td({ children: [d.toString()], style: tdStyle })
                }
                return Td({ children: [d], style: tdStyle })
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        })
    })
}

