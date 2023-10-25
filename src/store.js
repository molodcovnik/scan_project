import { createStore, applyMiddleware } from "redux";
import formReducer from "./redux/reducers";

import { logging } from "./redux/middleware/logging";


const store = createStore(formReducer, applyMiddleware(logging));

export default store;