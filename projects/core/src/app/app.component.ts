import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: AppService) {

  }
  title = 'core';
  clickHandler() {
    this.service.setUserName("Chetan Bakshi");
  }
}
