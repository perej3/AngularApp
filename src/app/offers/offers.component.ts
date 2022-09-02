import { ChangeDetectorRef, Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { delay, Observable, timer } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private _auth: AuthService) { }
  requestOffers : any
  subscriptionOffers: any
  offersList: any
  subscriptionList: any
  ready : any = false

  ngOnInit(): void {
    this._auth.getOffers()
      .subscribe(
        res => {
          this.requestOffers = res
          this.offersList = this.requestOffers.offers
          
          console.log("Offer response: ", this.offersList[0].id)
          this.ready = true
        }
      )
    
    console.log('Before display')

  }

  viewSubscriptions(offerId : string){
    this._auth.getSubscription(offerId)
      .subscribe(
        res => {
          this.subscriptionOffers = res
          this.subscriptionList = this.subscriptionOffers.subscriptions
          
          console.log("Subscription response ", this.subscriptionList[0].id)
          this.ready = true
        }
      )
    console.log(offerId)
  }
  logOut(){
    console.log('Logged out');
  }

  ngAfterViewInit() {
     this.cdr.detectChanges();
  }


}
