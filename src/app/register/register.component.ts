import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user=''
  acnum=''
  psw=''

  constructor(private ds:DatabaseService,private router:Router){
    
  }
  register(){
    var user=this.user
    var acnum=this.acnum
    var psw=this.psw

    const result =this.ds.register(acnum,user,psw)

    if(result){
      alert('registration sucessfull')
      this.router.navigateByUrl('')

    }
    else{
      alert('user already exist')
      this.router.navigateByUrl('')
    }

  }
  
}
