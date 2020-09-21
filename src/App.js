import MockData from "./MockData";
import Center from "jeddy/layouts/Center";
import CheckBoxInput from "jeddy/dom/CheckBoxInput";
import DataTable from "./DataTable/index";
import Div from "jeddy/dom/Div";

function ActionButton(name) {
    return CheckBoxInput({
        onClick: () => {
            console.log(name)
        }
    })
}

const App = () => {
    return Center({
        child: Div({
            children: [
                DataTable({
                    name: 'users',
                    data: MockData,
                    header: [
                        { title: "#" },
                        { title: "Name" },
                        { title: "Email" },
                        { title: "Phone" },
                        { title: "Website" },
                        { title: "Comp Name" },
                        { title: "Address" },
                        { title: CheckBoxInput() },
                    ],
                    display: 10,
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
                    }
                })
            ],
            style: { backgroundColor: 'white' }
        })
    })
}

export default App
