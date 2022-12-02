import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="dddddd"
  data="Account number"
  acno=''
  password=''
  userDetails:any={
    1000:{acnumber:1000,username:"gokul",password:123,balance:0},
    1001:{acnumber:1001,username:"anu",password:1234,balance:0},
    1002:{acnumber:1002,username:"manu",password:1235,balance:0},
    1003:{acnumber:1003,username:"arun",password:1236,balance:0}
  }
  // login(){
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
  login(a:any,b:any){

    this.acno=a.value
    this.password=b.value

   var acno=this.acno
   var psw=this.password
   var userDetails=this.userDetails
    if(acno in userDetails ){

      if(psw == userDetails[acno]["password"]){
        alert("login succesfull")
      }
      else{
        alert("incurrect password")
      }
    }
    else{
      alert("incurrect account number")
    }
  
  }
acnochange(event:any){
this.acno=event.target.value


}
passwordchange(event:any){
  this.password=event.target.value

}

}
