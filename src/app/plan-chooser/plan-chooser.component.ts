import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-chooser',
  templateUrl: './plan-chooser.component.pug',
  styleUrls: ['./plan-chooser.component.scss']
})
export class PlanChooserComponent implements OnInit {
  saleNum: number;
  promo: string;
  price = 10;
  constructor() { }

  ngOnInit() {
  }
  setPriceByPromo() {
    if (this.promo === 'Test') {
      this.price = 5;
    }
  }
  setPrice() {
    switch (+this.saleNum) {
      case 1: {
        this.price = 10;
        break;
      }
      case 2: {
        this.price = 9;
        break;
      }
      case 3: {
        this.price = 8;
        break;
      }
    }
  }
}
