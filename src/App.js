import "./App.css";
import { BrowserRouter as Router, Switch, Router } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" element={<Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
