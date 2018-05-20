import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthLoginService } from './services/auth.login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit
{
  private formGroup: FormGroup;

  constructor(private loginService: AuthLoginService) { }

  ngOnInit()
  {
    this.formGroup = new FormGroup({
      email     : new FormControl(''),
      password  : new FormControl('')
    });
  }

  private submit(form)
  {
    this.loginService.authenticate(form.value);
  }
}
