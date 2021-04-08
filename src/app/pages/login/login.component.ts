import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm=this.fb.group({
    usuario:['',[Validators.required]],
    password:['',Validators.required]
  });

  constructor( private fb: FormBuilder ) {   }

  onSubmit(){
    // alert("prueba");
    let user= this.loginForm.value.usuario;
    let contraseña= this.loginForm.value.password;

    if(this.loginForm.valid)
    {
      if(user=="profesor" ||  user=="director")
      {
        window.location.href="/registertime"
      }
      else
      {
        alert("usuario no existe")
      }
    }
    else
    {
      alert("Completar todos los datos")
    }
    
  }

  ngOnInit(): void {
  }

}
