import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BoardComponent} from "./board/board.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";
import {EmployeeDashboardComponent} from "./employee-dashboard/employee-dashboard.component";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'boards', component: DashboardComponent},
  { path: 'boards/:id', component: BoardComponent},
  { path: 'employee_dashboard', component: EmployeeDashboardComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
