import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';
import { LogService } from '../../../../shared/index';
import { LocalstorageService } from '../../../../shared/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private logService: LogService,
    private localstorageService: LocalstorageService,
    private router: Router) {
    this.user.name = 'UserOne';
    this.user.consortiumCode = 'T1';
  }

  ngOnInit() {
  }

  login(): void {
    this.authenticationService.login(this.user)
    .subscribe(
      res => {
        this.logService.logInfo('Login successful');
        this.localstorageService.setUserToken(JSON.stringify(res));
        this.router.navigate(['home']);
      },
      err => {
        this.logService.logInfo('Login unsuccessful');
      }
    );
  }
}
