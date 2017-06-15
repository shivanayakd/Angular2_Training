import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


@Injectable()
export class MyphotoService {
    // _url = '../assets/photos.json';
    _url = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private _http:Http){}
    
    getData(){
        return this._http.get(this._url)
        .map( result => result.json())
        .catch(this._handleMe);
    }

    _handleMe( error ){
        return Observable.throw(error);
    }
}