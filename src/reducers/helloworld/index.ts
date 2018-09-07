import {AnyAction, Reducer} from "redux";
import * as Types from "types/helloworld";

export const initialState : Types.IHelloWorldState = {
    cities: [
        {
            active: false,
            cityName: 'hanoi',
        },
        {
            active: false,
            cityName: 'london',
        },
        {
            active: false,
            cityName: 'tokyo',
        }
    ],
    data: {},
    isError: false,
    title: ''
};

const MainReducer: Reducer<Types.IHelloWorldState, AnyAction> = (
    state: Types.IHelloWorldState = initialState, action: Types.HelloWorldAction
) => {
    switch (action.type){
        case Types.HELLO_WORLD_CLICK_BUTTON_ACTION:
            return {
                ...state,
                cities: state.cities.map((city: {cityName: string, active: boolean}) => {
                    city.active = city.cityName === action.cityName;
                    return city;
                })
            };
        case Types.HELLO_WORLD_GET_SUCCESS:
            return {
                ...state,
                data: action.data,
                isError: false,
                title: action.title
            };
        case Types.HELLO_WORLD_GET_ERROR:
            return {
                ...state,
                data: action.data,
                isError: true,
                title: action.title
            };
    }

    return state;
};

export default MainReducer;