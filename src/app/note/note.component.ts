import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  title : string = "";
  content : string = "";
  id : number = -1;
  backgroundColor : string = "white";

  constructor() { }

  ngOnInit(): void {
  }

  createNote(title : string, content : string, id : number, backgroundColor : string){
    this.title = title;
    this.content = content;
    this.id = id; 
    this.backgroundColor = backgroundColor;
  }
}
