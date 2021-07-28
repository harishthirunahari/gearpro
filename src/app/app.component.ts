import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gearpro-app';
  @ViewChild("elemHome") elemHome: ElementRef;
  @ViewChild("elemProducts") elemProducts: ElementRef;
  @ViewChild("elemServices") elemServices: ElementRef;
  @ViewChild("elemContactUs") elemContactUs: ElementRef;

  public changeActiveLink(element: any): void {
    if(element === this.elemHome.nativeElement.text) {
      this.elemHome.nativeElement.className = "nav-item nav-link active";
    }
    else {
      this.elemHome.nativeElement.className = "nav-item nav-link";
    }

    if(element === this.elemProducts.nativeElement.text) {
      this.elemProducts.nativeElement.className = "nav-item nav-link active";
    }
    else {
      this.elemProducts.nativeElement.className = "nav-item nav-link";
    }

    if(element === this.elemServices.nativeElement.text) {
      this.elemServices.nativeElement.className = "nav-item nav-link active";
    }
    else {
      this.elemServices.nativeElement.className = "nav-item nav-link";
    }

    if(element === this.elemContactUs.nativeElement.text) {
      this.elemContactUs.nativeElement.className = "nav-item nav-link active";
    }
    else {
      this.elemContactUs.nativeElement.className = "nav-item nav-link";
    }

  }
}
