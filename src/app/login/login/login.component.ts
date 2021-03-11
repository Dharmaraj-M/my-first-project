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
    if (!(this.username == "" && this.password == "")) {
      if(this.username.match(/\d/) == null) {
        if(this.password.length > 5) {    
          this.dataDisplay.emit("Success");
        }
      }
    }
    else {
      this.dataDisplay.emit("Fail");
    }
  }
}
