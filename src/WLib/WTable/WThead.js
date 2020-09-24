import Thead from "jeddy/dom/Thead";
import Tr from "jeddy/dom/Tr";
import Th from "jeddy/dom/Th";

const thStyle = {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid #ddd'
}

export default (header) => {
    return Thead({
        children: [
            Tr({
                children: header.map((head) => {
                    return Th({
                        children: [head.title], style: {
                            ...head.style,
                            ...thStyle
                        }
                    })
                }),
                style: {
                    backgroundColor: '#F3F3F3',
                    fontSize: "15px",
                    borderBottom: '2px solid black',
                    color: '#212121'
                }
            })
        ]
    })
}