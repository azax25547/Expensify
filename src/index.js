import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configStore from "./store/configStore";
import { addExpense } from "./actions/expenses";
import * as serviceWorker from "./serviceWorker";
const store = configStore();

console.log(store.getState());

store.dispatch(
  addExpense({
    description: "water-bill",
    ammount: 200,
    createdAt: 1000,
    note: "Water Bill To PAy Monthly"
  })
);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
