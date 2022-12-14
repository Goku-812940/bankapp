import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


user=''

constructor(private ds:DatabaseService,private fb:FormBuilder){
  this.user=this.ds.currentuser
}

depositform=this.fb.group({acno:[''],psw:[''],amnt:['']})

  Deposit(){
    var acno=this.depositform.value.acno
    var psw=this.depositform.value.psw
    var amnt=this.depositform.value.amnt

    const result=this.ds.Deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt}credited to your ac and the balance is${result}`)
    }
    else{
      alert('incurrect ac number or password')
    }
  }

  withdrawform=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})

  Withdraw(){
    var acno1=this.withdrawform.value.acno1
    var psw1=this.withdrawform.value.psw1
    var amnt1=this.withdrawform.value.amnt1
    const result=this.ds.Withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1}debited from  your ac and the balance is${result}`)
    }
 
  }
}
