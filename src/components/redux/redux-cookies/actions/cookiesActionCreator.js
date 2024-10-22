import { BUY_COOKIE } from "./cookiesType"

function buyCookiesActionCreator(){
    return {
        type: BUY_COOKIE,
        info: 'First redux action'
    }
}

export default buyCookiesActionCreator;