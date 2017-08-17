import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BoardComponent} from "./board/board.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";
const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'boards', component: BoardComponent},
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
