import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  currentuser=''
  currentacno=''

  constructor() { }
  userDetails: any = {
    1000: { acnumber: 1000, username: "gokul", password: 123, balance: 0 ,transaction:[]},
    1001: { acnumber: 1001, username: "anu", password: 1234, balance: 0 ,transaction:[] },
    1002: { acnumber: 1002, username: "manu", password: 1235, balance: 0 ,transaction:[]},
    1003: { acnumber: 1003, username: "arun", password: 1236, balance: 0 ,transaction:[]}
  }
  register(acnum: any, user: any, psw: any) {
    var userDetails = this.userDetails
    if (acnum in userDetails) {
      return false
    }
    else {
      userDetails[acnum] = { acnumber: acnum, username: user, password: psw, balance: 0,transaction:[] }
      console.log(userDetails);

      return true
    }
  }


  login(acno: any, psw: any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {

      if (psw == userDetails[acno]["password"]) {
        alert("login succesfull")
        this. currentuser=userDetails[acno]["username"]
        this. currentacno=userDetails[acno]["acnumber"]
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }
  Deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
        userDetails[acno]["transaction"].push({type:'CREDIT',amount:amnt})
        return  userDetails[acno]["balance"]

      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }
  Withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)

    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        if(amnt<=userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amnt
          userDetails[acno]["transaction"].push({type:'DEBIT',amount:amnt})
          return  userDetails[acno]["balance"]

        }
        else{
        
          alert('incufficent balance')
          return false
        }
      }
      else{
        
        alert('incurrect password')
        return false
      }

    }
    else{
     
     alert('inncrrect ac number')
      return false
    }

  } 
  gettransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

} 
