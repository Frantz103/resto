import { Component } from '@angular/core';
import {ListingService } from './services/listing.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'resto',
  templateUrl: 'app/view/app.component.html'
  

})


export class AppComponent  {



 public listings_error:Boolean = false;
 public listings;


  constructor(private listingService: ListingService) { }
  

  ngOnInit() {
    this.getListings();
  }


 
  getListings() {
    this.listingService.getListings()
      .subscribe(
        data => { this.listings = data},
        err => { this.listings_error = true }
      );
  }



 }


