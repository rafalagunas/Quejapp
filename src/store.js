import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";

let store = createStore(rootReducer, applyMiddleware(logger));

export default store;
