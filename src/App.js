import MockData from "./MockData";
import Center from "jeddy/layouts/Center";
import CheckBoxInput from "jeddy/dom/CheckBoxInput";
import DataTable from "./WLib/index";
import Card from "jeddy/widgets/Card";
import Button from "jeddy/dom/Button";
import Tfoot from "jeddy/dom/Tfoot";
import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Div from "jeddy/dom/Div";
import { connect, dispatch } from "jeddy/jredux";
import { actions } from "./Reducers/RTest";
const { handleChange } = actions
function ActionButton(name) {
    return CheckBoxInput({
        onClick: () => dispatch(handleChange())
        // {
        //     console.log(name)
        // }
    })
}

const App = ({ data }) => {
    console.log(data)
    return Div({
        children: [
            myTable('users', data)
        ],
        style: { padding: '50px' }
    })
}

function myTable(_name, data) {
    return Card({
        children: [
            DataTable({
                name: _name,
                data: data,//MockData,
                header: [
                    { title: "#", style: { width: '20px' } },
                    { title: "Name" },
                    { title: "Email" },
                    { title: "Phone" },
                    { title: "Website" },
                    { title: "Comp Name" },
                    { title: "Address" },
                    { title: CheckBoxInput(), style: { width: '20px' } },
                ],
                display: 10,
                searchable: true,
                // actionItems: [
                //     Button({ children: ["Add New"] }),
                //     Button({ children: ["Upload"], style: { marginLeft: '4px' } })
                // ],
                iterator: (row, index) => {
                    return {
                        rowData: [
                            index + 1,
                            row.name,
                            row.email,
                            row.phone,
                            row.website,
                            row.company.name,
                            row.address.street,
                            ActionButton(row.name)
                        ]
                    }
                },
                // footer: Tfoot({
                //     children: [
                //         Tr({
                //             children: [
                //                 Td({ colspan: 3, style: tdStyle }),
                //                 Td({ children: ["321,312,534,543"], style: tdStyle }),
                //                 Td({ colspan: 4, style: tdStyle }),
                //             ]
                //         })
                //     ]
                // })
            })
        ],
        style: {
            minWidth: '1000px',
            minHeight: '450px',
            padding: '30px'
        }
    })
}

const tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
}

export default connect((state) => ({ ...state.RTest }))(App)
