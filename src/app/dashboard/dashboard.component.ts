import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
acno=''
psw=''
amnt=''

acno1=''
psw1=''
amnt1=''

user=''

constructor(private ds:DatabaseService){
  this.user=this.ds.currentuser
}
  Deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.Deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt}credited to your ac and the balance is${result}`)
    }
    else{
      alert('incurrect ac number or password')
    }
  }
  Withdraw(){
    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1

    const result=this.ds.Withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1}debited from  your ac and the balance is${result}`)
    }
 
  }
}
