import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(keyword : string){
    this.myEvent.emit(keyword);
  }

}
