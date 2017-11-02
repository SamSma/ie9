/**
 * Created by Administrator on 2017/10/10 0010.
 */
import  { createStore } from  "redux";
import reducers  from "../reducers";


export function configureStore(initState) {
    return createStore(reducers,initState,
        window.devToolsExtension?window.devToolsExtension():undefined
    )
}

