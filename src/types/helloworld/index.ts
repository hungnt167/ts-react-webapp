import {Action, Dispatch} from "redux";

export const HELLO_WORLD_CLICK_BUTTON_ACTION = 'HELLO_WORLD_CLICK_BUTTON_ACTION';
export type HELLO_WORLD_CLICK_BUTTON_ACTION = typeof HELLO_WORLD_CLICK_BUTTON_ACTION;

export const HELLO_WORLD_GET_ERROR = 'HELLO_WORLD_GET_ERROR';
export type HELLO_WORLD_GET_ERROR = typeof HELLO_WORLD_GET_ERROR;

export const HELLO_WORLD_GET_SUCCESS = 'HELLO_WORLD_GET_SUCCESS';
export type HELLO_WORLD_GET_SUCCESS = typeof HELLO_WORLD_GET_SUCCESS;


export interface IHelloWorldState {
    cities: object[]
    data?: any
    isError?: boolean
    title?: string
}

export interface IHelloWorldDispatch {
    getCityDetail(cityName: string):Dispatch<IHelloWorldClickButtonAction>
}

export interface IHelloWorldClickButtonAction extends Action{
    cityName: string
    data?: any
    title?: string
}

export type HelloWorldAction = IHelloWorldClickButtonAction;

export interface IHelloWorldGetSuccessAction extends Action{
    cityName?: string
    data: any
    title: string
}

export type HelloWorldGetSuccessAction = IHelloWorldGetSuccessAction;

export interface IHelloWorldGetErrorAction extends Action{
    cityName?: string
    data: any
    title: string
}

export type HelloWorldGetErrorAction = IHelloWorldGetErrorAction;

export interface IHelloWorldStates {
    externalState?: any,
}