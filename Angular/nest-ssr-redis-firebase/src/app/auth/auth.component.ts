import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  googleSignin() {
    this.auth.googleSignin().subscribe((user) => {
      console.log(user);
    });
  }
}
