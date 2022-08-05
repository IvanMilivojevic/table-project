import { Switch, Route } from "react-router-dom";
import Articles from "./Pages/Articles";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Articles />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
