import MockData from "./MockData";
import CheckBoxInput from "jeddy/dom/CheckBoxInput";
import DataTable from "./WLib/index";
import Card from "jeddy/widgets/Card";
import SearchIcon from "./WLib/Assets/SearchIcon";
import Div from "jeddy/dom/Div";
function ActionButton(name) {
    return CheckBoxInput({
        onClick: function () {
            console.log(name);
        }
    });
}
var App = function () {
    console.log("CALLED....");
    return Div({
        children: [
            myTable('users')
        ],
        style: { padding: '50px' }
    });
};
function myTable(_name) {
    return Card({
        children: [
            SearchIcon(),
            DataTable({
                name: _name,
                data: MockData,
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
                iterator: function (row, index) {
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
                    };
                },
            })
        ],
        style: {
            minWidth: '1000px',
            minHeight: '450px',
            padding: '30px'
        }
    });
}
var tdStyle = {
    padding: '8px',
    border: '1px solid #ddd',
};
export default App;
