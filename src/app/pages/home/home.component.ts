import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDesktop : boolean = false;
  isTablet : boolean = false;
  isMobile : boolean = false;

  constructor(private responsive: BreakpointObserver) { 

    this.responsive.observe([
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
    
        if (breakpoints[Breakpoints.WebLandscape] || breakpoints[Breakpoints.WebPortrait]) {
          this.isDesktop = true;
        }else if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.TabletLandscape]) {
          this.isTablet = true;
        }else if (breakpoints[Breakpoints.HandsetLandscape] || breakpoints[Breakpoints.HandsetPortrait]) {
          this.isMobile = true;
        }
    
      });

  }

  ngOnInit(): void {
  }

}
