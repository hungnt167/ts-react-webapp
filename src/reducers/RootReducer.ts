import Reducers from "reducers";
import * as Redux from 'redux';
import {IApplicationState} from "types";

const reducers: Redux.Reducer<IApplicationState> = Redux.combineReducers({
    HelloWorldReducer: Reducers.HelloWorldReducer,
});

export default reducers;