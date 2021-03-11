import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
  title = 'Login Page';
  username: string = '';
  password: string = '';
  @Output() dataDisplay:EventEmitter<any> = new EventEmitter<any>();
  inputValidate(): void {
    // console.log(this.username + " " + this.password);
    let flag:number = 1;
    if (this.username == "" || this.password == "") {
      flag = 0;
      this.dataDisplay.emit("Fail");
    }
    if(this.username.match(/\d/) != null) {
      flag = 0;
      this.dataDisplay.emit("Fail");
    }
    if(this.password.length <= 5) {
      flag = 0;
      this.dataDisplay.emit("Fail");
    }
    if(flag == 1) {
      this.dataDisplay.emit("Success");
    }
  }
}
