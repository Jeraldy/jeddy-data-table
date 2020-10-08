import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Tbody from "jeddy/dom/Tbody";

export default (data, args) => {
    const { iterator, header } = args
    return Tbody({
        children: TableContent(data, iterator, header),
        style: { borderBottom: '2px solid black', color: "#616161" }
    })
}

const tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
}

function TableContent(data, iterator, header) {
    return data.map((row, index) => {
        let rowClone = { ...row }
        rowClone = iterator(rowClone, index)
        return Tr({
            children: rowClone.rowData.map((d, i) => {
                let title = typeof header[i].title == "object" ? "" : header[i].title
                if (i == 0) {
                    if (typeof d == "number") {
                        return Td({ children: [d.toString()], style: tdStyle, 'data-label': title, scope: "row" })
                    }
                    return Td({ children: [d], style: tdStyle, scope: "row", 'data-label': title })
                } else {
                    if (typeof d == "number") {
                        return Td({ children: [d.toString()], style: tdStyle, 'data-label': title })
                    }

                    return Td({ children: [d], style: tdStyle, 'data-label': title })
                }
            }),
            attrs: { key: index },
            style: rowClone.rowStyle
        })
    })
}

