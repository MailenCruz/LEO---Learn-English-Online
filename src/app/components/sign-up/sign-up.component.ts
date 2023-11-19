import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  form!:FormGroup;
  errorMail!:string;
  errorUser!:string;

  constructor(private userService:UsersService, private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]]
    })
  }


  async guardarUser(){
    this.verificarEmail();
    this.verificarUser();
    if(this.errorMail && this.errorUser){
      await this.userService.postUser(this.form.value);
      this.router.navigate(['/ingresa'])
    }else{
      return;
    }
  }

  async verificarEmail(){
    this.errorMail = await this.userService.verificarEmail(this.form.controls['email'].value);
    if(this.errorMail == 'exito'){
      return true;
    }else{
      return false;
    }
  }

  async verificarUser(){
    this.errorUser = await this.userService.verificarUser(this.form.controls['username'].value);
    if(this.errorUser == 'exito'){
      return true;
    }else{
      return false;
    }


}

}
