import { CepService } from './../../cep.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cep-texto',
  templateUrl: './cep-texto.component.html',
  styleUrls: ['./cep-texto.component.css']
})
export class CepTextoComponent implements OnInit {
    cep : any = {}
    cepText : string = ''
  constructor(private cepservice : CepService) { }

  ngOnInit() {
  }


  buscarCep(){
    this.cepservice.getCEP(this.cepText).subscribe(value=>{
      this.cep = value;
      
    })
  }

}
