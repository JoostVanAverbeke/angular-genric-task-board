import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "./user";
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.authenticationService.login(value.login, value.password)
      .subscribe(data => { this.router.navigate([this.returnUrl])});
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [ '', Validators.required],
      password: ['', Validators.required]
    });
  }

}
