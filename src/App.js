import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Second from "./components/Second";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/second" exact component={Second} />
    </Switch>
  );
}

export default App;
