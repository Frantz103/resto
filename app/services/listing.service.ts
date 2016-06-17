import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ListingService {

constructor(private http: Http) { }
      
  getListings() {
   return Observable.forkJoin (
     this.http.get('http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San%20Francisco.json').map((res:Response) => res.json().items)


     );
  }

}
