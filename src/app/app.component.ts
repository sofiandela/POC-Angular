import { Component } from '@angular/core';

@Component({
  selector: 'chu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFede';
  hideSpinner = false;

  constructor(){
  }
  
  ngOnInit(){
    setTimeout(() => {
      this.hideSpinner = true;
    }, 1500);


  }
}
