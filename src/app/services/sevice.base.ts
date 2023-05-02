import {HttpHeaders} from '@angular/common/http'
import { throwError } from 'rxjs';


export abstract class SeviceBase {
protected UrlServiceV1: string = "http://localhost:5097/api/v2/";
    protected ObterHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected extractData(response:any){
        return response.data || {}
    }

    protected seviceError(error: Response | any){
          
        let errMsg: string;

        if(error instanceof Response){
            errMsg = `${error.status} - ${error.statusText || ''} `;
        }else{
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return throwError(error);
    }
}