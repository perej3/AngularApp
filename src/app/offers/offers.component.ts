import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private _auth: AuthService, private _router: Router) { }
  requestOffers: any
  subscriptionOffers: any
  offersList: any
  subscriptionList: any
  readyOffers: any = false
  readySubscriptions: any = true
  

  ngOnInit(): void {
    this._auth.getOffers()
      .subscribe(
        res => {
          this.requestOffers = res
          this.offersList = this.requestOffers.offers

          console.log("Offer response: ", this.offersList[0].id)
          this.readyOffers = true
        }
      )

    console.log('Before display')

  }

  viewSubscriptions(offerId: string) {
    this.readySubscriptions = false
    this._auth.getSubscription(offerId)
      .subscribe(
        res => {
          this.subscriptionOffers = res
          this.subscriptionList = this.subscriptionOffers.subscriptions

          console.log("Subscription response ", this.subscriptionList[0].id)
          this.readySubscriptions = true
          
        }
      )
    console.log(offerId)
  }
  logOut() {
    this._auth.logoutUser().subscribe(
      res => {
        localStorage.removeItem('Authorization')
        this._router.navigate(['login'])
      }
    )
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    
  }


}
