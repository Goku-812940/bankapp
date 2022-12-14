import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim = "Your Perfect Banking partner"
  data = "Account number"
  // acno = ''
  // password = ''

  constructor(private router: Router, private ds: DatabaseService,private fb:FormBuilder) {

  }

loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  login() {
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if(this.loginForm.valid){
      const result=this.ds.login(acno,psw)
      if(result){
        alert('login success')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('incurrect account number or password')
      }
    }
   

    // login(a:any,b:any){

    //   this.acno=a.value
    //   this.password=b.value

    //  var acno=this.acno
    //  var psw=this.password
    //  var userDetails=this.userDetails
    //   if(acno in userDetails ){

    //     if(psw == userDetails[acno]["password"]){
    //       alert("login succesfull")
    //     }
    //     else{
    //       alert("incurrect password")
    //     }
    //   }
    //   else{
    //     alert("incurrect account number")
    //   }

    // }
    // acnochange(event:any){
    // this.acno=event.target.value


    // }
    // passwordchange(event:any){
    //   this.password=event.target.value

    // }
  }

  }
