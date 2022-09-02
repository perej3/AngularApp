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
  offersList: any
  ready : any = false

  ngOnInit(): void {
    this._auth.getOffers()
      .subscribe(
        res => {
          this.requestOffers = res
          this.offersList = this.requestOffers.offers
          // this.offers = Array.of(res);
          console.log("This should be the response: ", this.offersList[0].id)
          this.ready = true
        }
      )
    console.log('Before display')

  }

  display() {
    console.log(this.requestOffers)

  }
  ngAfterViewInit() {
     this.cdr.detectChanges();
  }


}
