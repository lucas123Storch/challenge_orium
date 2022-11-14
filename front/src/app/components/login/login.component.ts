import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceApi } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(private service: AuthServiceApi, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let body = {
      email: this.email,
      password: this.password
    }
    this.service.login(body).then((res) => {
      localStorage.setItem('accessToken', res.access_token.token)
      localStorage.setItem('idUser', res.user.id)
      this.router.navigate(['/'])
    })
  }

}
