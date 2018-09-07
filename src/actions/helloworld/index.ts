import * as Types from "types/helloworld";

export function clickCity(cityName: string): Types.HelloWorldAction {
    return {
        cityName,
        type: Types.HELLO_WORLD_CLICK_BUTTON_ACTION,
    }
}

export function getSuccess(title: string, data: any): Types.HelloWorldGetSuccessAction {
    return {
        data,
        title,
        type: Types.HELLO_WORLD_GET_SUCCESS,
    }
}

export function getError(title: string, data: any): Types.HelloWorldGetErrorAction {
    return {
        data,
        title,
        type: Types.HELLO_WORLD_GET_ERROR,
    }
}