import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registertime',
  templateUrl: './registertime.component.html',
  styleUrls: ['./registertime.component.css']
})
export class RegistertimeComponent implements OnInit {


  register=this.fb.group({
    usuario:[''],
    password:['']
  });

  constructor(private fb: FormBuilder) { }

  grabarMarcacion( marcador)
  {

    let fechaHora = new Date();
    let horas = fechaHora.getHours().toString();
    let minutos = fechaHora.getMinutes().toString();
    let segundos = fechaHora.getSeconds().toString();    


    (parseInt(horas) < 10) ? (horas = '0' + horas) : ''; 
    (parseInt(minutos) < 10) ? ( minutos = '0' + minutos):'';
    (parseInt(segundos) < 10) ? (segundos = '0' + segundos):''; 

    alert("Se registro su " + marcador + " \n\n "+ "Hora de marcación " + horas+":"+minutos +":"+segundos )

  }

  ngOnInit(): void {
 
  }

}
