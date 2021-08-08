import { CompileShallowModuleMetadata, NullTemplateVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'save-notes';
  expandTextArea = false;
  color="red";
  arr : NoteComponent[] = [];
  obj : NoteComponent = new NoteComponent();
  ctitle : string = "";
  ctext : string = "";
  keyword = "";
  id = -1;
  tempArr : NoteComponent[] = [];


  expand(){
    this.expandTextArea = true;
    console.log("expand");
  }
  collapse(){
    this.expandTextArea = false;
    console.log("collapse");
  }

  createNote(){
  
    console.log(this.ctitle);
    console.log(this.ctext); 
    this.obj = new NoteComponent();
    this.id = this.id + 1;
    this.obj.createNote(this.ctitle, this.ctext, this.id);
    this.ctitle = "";
    this.ctext = "";
    this.arr.push(this.obj);

    console.log(this.arr.length);
    //console.log("from create method "+this.arr);
  }

  submitValues(value : any){
    console.log(value);
  }

  deleteNote(arg : any){
    console.log(arg.id);
    this.arr.forEach((value, index)=>{
      if(value.id==arg.id)
        this.arr.splice(index,1);
    });
  }

  search(keywordToMatch : string){
    this.keyword = keywordToMatch;
    console.log(this.keyword);
    for(let x=0; x<this.arr.length; x++){
      if(this.arr[x].title===this.keyword){
        this.tempArr.push(this.arr[x]);
      }
    }
    console.log(this.tempArr);
  }

  
}
