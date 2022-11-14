import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceApi } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthServiceApi, private router: Router) {}

  ngOnInit(): void {
    this.configForm();
  }

  register() {
    console.log(this.form.value);

    let body = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.service.register(body).then((res) => {
      localStorage.setItem('accessToken', res.access_token)
      localStorage.setItem('idUser', res.newUser.id)
      this.router.navigate(['/'])
    });
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
