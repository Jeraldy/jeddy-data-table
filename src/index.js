import { Jeddy, StatefulWidget } from "jeddy";
import { updateState } from "jeddy/jredux";
import App from "./App";
import reducers from "./Reducers/index";

class Main extends StatefulWidget {
    constructor(props) {
        super(props)
        return this.connect()
    }
    componentDidMount() { updateState(this) }
    render() { return App() }
}

Jeddy.Init({ app: new Main({ reducers }) });
