import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    /*this.authenticationService.login(this.user.name, this.user.password)
      .subscribe(
        data => {
          this.router.navigate('home');
        },
        error => {
          this.logServive.logError(error);
        });*/

    if (this.authenticationService.login(this.user.name, this.user.password)) {
      this.router.navigate(['home']);
    }
  }
}
