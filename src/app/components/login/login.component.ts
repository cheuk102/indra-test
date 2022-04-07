import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { regex } from 'src/share/share-material/regex';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
    ) {
      const savedSession = sessionStorage.getItem('saveSession') === 'true';
      if (savedSession) {
        this.router.navigate(['/home']);
      }
    }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description Initialice form controls
   */
  initForm(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.pattern(regex.alphanumeric),
        Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]],
      saveSession: new FormControl()
    });
  }

  /**
   * @description Verify user and password are valid
   */
  login(): void {

    const user = {
      user: this.loginForm.controls.user.value,
      password: this.loginForm.controls.password.value,
      session: this.loginForm.controls.saveSession.value
    };

    this.loginService.validateUser(user).then(res => {

      this.router.navigate(['/home']);

    }).catch(err => {
      this.toastr.error(err.msg);
    });

  }

}
