import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BoardComponent} from "./board/board.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";
import {EmployeeDashboardComponent} from "./employee-dashboard/employee-dashboard.component";
import {EmployeeJobDashboardComponent} from "./employee-job-dashboard/employee-job-dashboard.component";
import {CanActivateWhenAuthenticatedGuard} from "./can-activate-when-authenticated.guard";
import {AuthenticateComponent} from "./authenticate/authenticate.component";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'boards', component: DashboardComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'boards/:id', component: BoardComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'employee_dashboard', component: EmployeeDashboardComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'employee_job_dashboard', component: EmployeeJobDashboardComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'settings', component: SettingsComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  { path: 'help', component: HelpComponent,
    canActivate: [ CanActivateWhenAuthenticatedGuard ]
  },
  {
    path: 'login', component: AuthenticateComponent
  }
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
