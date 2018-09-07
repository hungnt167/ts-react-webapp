import { ajax } from 'rxjs/ajax';
import {Observable} from "rxjs/index";

export class HelloWorldService {
	public static GetCityDetails = (cityName: any): Observable<any> => {
        return ajax.getJSON(`http://getcitydetails.geobytes.com/GetCityDetails?fqcn=${cityName}`, { 'mode' : 'no-cors' });
	};


}