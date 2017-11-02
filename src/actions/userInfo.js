/**
 * Created by Administrator on 2017/10/10 0010.
 */
import * as Types from "../action-types/userInfo";

export function userInfo(info) {
    return {
        type:Types.USER_INFO,
        data:info
    }
}