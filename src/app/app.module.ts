import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragulaModule} from "ng2-dragula";
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatOptionModule,
  MatSelectModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule
} from "@angular/material";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import {AppRoutingModule} from "./app-routing.module";
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import {BoardService} from "./board/board.service";
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import {JobTimesService} from "./employee-dashboard/job_times.service";
import {NvD3Module} from "ng2-nvd3";

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { EmployeeService} from "./employee-dashboard/employee.service";
import { EmployeeMultibarChartComponent } from './employee-multibar-chart/employee-multibar-chart.component';
import { EmployeeJobDashboardComponent } from './employee-job-dashboard/employee-job-dashboard.component';
import { EmployeeDonutChartComponent } from './employee-donut-chart/employee-donut-chart.component';
import { EmployeeJobQueryComponent } from './employee-job-query/employee-job-query.component';
import { LDAPService} from "./ldap.service";
import { CanActivateWhenAuthenticatedGuard} from "./can-activate-when-authenticated.guard";
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthenticationService} from "./authentication.service";
import { ThemePickerModule} from "./shared/theme-picker/theme-picker";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    CardComponent,
    SettingsComponent,
    HelpComponent,
    EmployeeDashboardComponent,
    EmployeeMultibarChartComponent,
    EmployeeJobDashboardComponent,
    EmployeeDonutChartComponent,
    EmployeeJobQueryComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragulaModule,
    NvD3Module,
    AppRoutingModule,
    ThemePickerModule
  ],
  providers: [
    BoardService,
    JobTimesService,
    EmployeeService,
    AuthenticationService,
    LDAPService,
    CanActivateWhenAuthenticatedGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
