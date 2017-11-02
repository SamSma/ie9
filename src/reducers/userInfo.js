/**
 * Created by Administrator on 2017/10/10 0010.
 */
import * as Types from "../action-types/userInfo";
let ininState ={id:0};
export function userInfo(state= ininState,action){
    if (action.type===undefined ) return state;
    switch (action.type){
        case Types.USER_INFO :
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}