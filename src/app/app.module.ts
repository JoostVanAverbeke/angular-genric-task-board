import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragulaModule} from "ng2-dragula";
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdListModule, MdMenuModule, MdOptionModule,
  MdSelectModule,
  MdToolbarModule
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
import {EmployeeService} from "./employee-dashboard/employee.service";
import { EmployeeMultibarChartComponent } from './employee-multibar-chart/employee-multibar-chart.component';
import { EmployeeDashboardQueryComponent } from './employee-dashboard-query/employee-dashboard-query.component';

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
    EmployeeDashboardQueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdOptionModule,
    MdSelectModule,
    DragulaModule,
    NvD3Module,
    AppRoutingModule
  ],
  providers: [ BoardService, JobTimesService, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
