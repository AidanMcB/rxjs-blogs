import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public observableDemo() {
    const observable = new Observable(subscriber => {
      subscriber.next("this message");
      subscriber.next("sends a little");
      subscriber.next("at");
      subscriber.next("a time");
      subscriber.complete();
    })
  }

}
