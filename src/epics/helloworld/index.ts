import {getError, getSuccess} from "actions/helloworld";
import {Action} from "redux";
import {ofType} from "redux-observable";
import {Observable, of} from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import {HelloWorldService} from "services/HelloWorldService";
import {HELLO_WORLD_CLICK_BUTTON_ACTION, IHelloWorldClickButtonAction} from "types/helloworld";

const helloworldEpic = (action$: Observable<Action<any>>): Observable<Action<any>> =>
    action$.pipe(
        ofType(HELLO_WORLD_CLICK_BUTTON_ACTION),
        mergeMap( (action: IHelloWorldClickButtonAction) => {
             return HelloWorldService.GetCityDetails(action.cityName)
        }),
        catchError(err => {
            return of(err)
        }),
        map((res: any) => {
            if (res.status) {
                return getSuccess(res.message, res)
            }

            return getError(res.message, res)
        })
    );


export default helloworldEpic;