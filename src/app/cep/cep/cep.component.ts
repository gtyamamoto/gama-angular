import { CepService } from '../cep.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep : any = {};

  constructor(public cepservice : CepService,
     private activatedRoute : ActivatedRoute) { }

   ngOnInit () {
   
    this.activatedRoute.params.subscribe( (params)=>{
      this.cepservice.getCEP(params.numero).subscribe(value=>{
        this.cep = value;
      })
    })
    
  }

}
