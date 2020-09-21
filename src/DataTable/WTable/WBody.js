import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Tbody from "jeddy/dom/Tbody";

export default (data, args) => {
    const { iterator, header } = args
    return Tbody({
        children: TableContent(data, iterator),
        style: { borderBottom: '2px solid black', color: "#616161" }
    })
}

const tdStyle = (i) => ({
    padding: '8px',
    border: '1px solid #ddd',
    //borderLeft: i != 0 ? '1px solid #ddd' : ''
})

function TableContent(data, iterator) {
    return data.map((row, index) => {
        let rowClone = { ...row }
        rowClone = iterator(rowClone, index)
        return Tr({
            children: rowClone.rowData.map((d, i) => {
                if (typeof d == "number") {
                    return Td({ children: [d.toString()], style: tdStyle(i) })
                }
                return Td({ children: [d], style: tdStyle(i) })
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        })
    })
}

