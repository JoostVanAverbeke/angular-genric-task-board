import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragulaModule} from "ng2-dragula";
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdListModule, MdMenuModule,
  MdToolbarModule
} from "@angular/material";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import {AppRoutingModule} from "./app-routing.module";
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    CardComponent,
    SettingsComponent,
    HelpComponent
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
    DragulaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
