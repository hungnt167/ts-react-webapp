import * as ReduxObservable from 'redux-observable';
import helloworldEpic from './helloworld';

const epics = ReduxObservable.combineEpics(
    helloworldEpic
);

export default epics;