import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    user: [''],
    pass: ['']
  });
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
   
}

  onSubmit() {
    let user = this.profileForm.get('user').value;
    let pass = this.profileForm.get('pass').value;
    this.authService.login(user, pass).subscribe(val => { this.router.navigate([val]) })
  }

}
