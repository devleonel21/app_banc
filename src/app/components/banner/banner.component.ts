import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() isDesktop: any;
  @Input() isTablet: any;
  @Input() isMobile:  any;


  constructor() {
    console.log('DATO DESKTOP',this.isDesktop)
   }

  ngOnInit(): void {
  }

}
