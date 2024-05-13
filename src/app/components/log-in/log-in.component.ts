import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{
  private formBuilder: FormBuilder = inject(FormBuilder)
  private auth: UsersService = inject(UsersService)
  private router: Router = inject(Router)
  valid!:string

  formulario: FormGroup = this.formBuilder.group({
    username: ['',[Validators.required, Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6)]],
    /* email:['',[Validators.required,Validators.email]] */
  })

  /*async iniciarSession() {
    if (this.formulario.invalid) return;

    this.valid=await this.auth.verificarUserAndPass(
      this.formulario.controls['username'].value,
      this.formulario.controls['password'].value)
      
    console.log(this.valid);
  }*/

  iniciarSession() {
    if (this.formulario.invalid) return;

    this.auth.verificarUserAndPass(
      this.formulario.controls['username'].value,
      this.formulario.controls['password'].value
    )
  }

    /* const user: User = {
      user: this.formulario.controls['user'].value,
      password: this.formulario.controls['password'].value,
      id?:null
    }
    this.auth.loginUser(user.user, user.password) */


  /* form!:FormGroup;
  user!:User;

  constructor(private userService:UsersService, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
  }

  getUser(){
    this.user = this.form.value;
  }

  async userExists(email:string){
    let usuario = await this.userService.getUser(email);
    if(usuario){
      console.log('existe');
    }else{
      console.log('no existe');
    }
  } */
 

}
