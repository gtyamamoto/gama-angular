import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  counter = 0;
  hideCounter = false;
  constructor() { }

  ngOnInit() {
    const intervalScheduler =  setInterval(() => {
      this.counter++;
      if(this.counter === 10){
        this.hideCounter = true;
        clearInterval(intervalScheduler);
        
      }
    }, 1000);
  }

}
