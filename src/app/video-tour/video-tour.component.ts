import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-video-tour',
  templateUrl: './video-tour.component.pug',
  styleUrls: ['./video-tour.component.scss']
})
export class VideoTourComponent implements OnInit {
  bool: boolean =false;
  constructor() { }

  ngOnInit() {
    this.bool = false;
  }
  setBool() {
    if ($("video").paused)
      $("video").play();
    else
      $("video").pause();
  }
}
