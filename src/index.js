import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPath from "./Routes";
import { Provider } from "react-redux";
import initStore from "./redux/store.js";
import "./styles/main.scss";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={initStore()}>
    <Router>
      <RoutesPath />
    </Router>
  </Provider>
);
