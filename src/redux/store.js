import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initStore = () => {
  const composeEnhancers = (typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};

export default initStore;