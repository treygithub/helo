import { createStore } from "redux";
import reducer from "./reducer";
// import promiseMiddleware from "redux-promise-middleware";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer,  composeWithDevTools(applyMiddleware(promiseMiddleware)));
// export default store;


export default createStore(reducer);
 