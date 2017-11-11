import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppTheme} from "./shared/theme-picker/app-theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miaxello Dashboard';
  theme = 'miaxello-indigo-light-theme';

  constructor(private router: Router) {
  }
  renderDashboard() {
    this.router.navigate(['']);
  }
  renderSettings() {
    this.router.navigate(['/settings']);
  }

  renderHelp() {
    this.router.navigate(['/help']);
  }

  renderEmployeeDashboard() {
    this.router.navigate(['/employee_dashboard']);
  }

  renderEmployeeJobDashboard() {
    this.router.navigate(['/employee_job_dashboard']);
  }

  renderTrailFormBuilderComponent() {
    this.router.navigate(['/trail_form_builder']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  themeManager(theme: AppTheme) {
    this.theme = theme.classKey;
  }

}
