import RootEpic from 'epics/RootEpic';
import RootReducer from 'reducers/RootReducer';
import * as Redux from 'redux';
import * as ReduxObservable from 'redux-observable';

/**  config redux-observable */
const epicMiddleware = ReduxObservable.createEpicMiddleware();
const store = Redux.createStore(RootReducer, Redux.applyMiddleware(
    epicMiddleware
));

epicMiddleware.run(RootEpic);

export default store;