import React from 'react';
import ReactDOM from 'react-dom';
import routes  from "./routes/route";
import { Provider } from "react-redux"
import { configureStore } from  "./store";
import "./index.less";


let store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        { routes }
    </Provider>

, document.getElementById('root'));

