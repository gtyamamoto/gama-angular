
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Xurupita';
  items : Array<string|number> = [2,3,4,5,'jabuticaba'];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.title ='auuuuuuuuuuu'
    }, 2000);
  
    
  }
  novoItem(): void{
    const text = prompt('digite um nome');
    this.items.push(text);
  }
}
