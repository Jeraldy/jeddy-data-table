import Div from "jeddy/dom/Div";
import { dispatch } from "jeddy/jredux";
import { actions } from "./reducers";
import CheckBoxInput from "jeddy/dom/CheckBoxInput";
const { toggleCheckbox } = actions;

const CheckBoxComp = ({ checked }) => {
    return Div({
        children: [
            CheckBoxInput({
                checked,
                onChange: () => dispatch(toggleCheckbox())
            }),
        ]
    })
}

export default CheckBoxComp;