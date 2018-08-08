import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.pug',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  imgList = [{src: '../../assets/images/Tablet2.png', alt: 'Image Sync'},
             {src: '../../assets/images/Tablet5.png', alt: 'Image Face'},
             {src: '../../assets/images/Tablet3.png', alt: 'Image Clock'}];
  imageUrl = this.imgList[0].src;
  imageAlt = this.imgList[0].alt;
  step = 1;

  constructor() {

  }

  ngOnInit() {

  }
  setTablet(step) {
    this.step = step;
    this.imageUrl = this.imgList[step - 1].src;
    this.imageAlt = this.imgList[step - 1].alt;
  }

}
