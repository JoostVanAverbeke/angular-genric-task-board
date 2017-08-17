import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Generic Task Board App';
  constructor(private router: Router) {
  }
  renderDashboard() {
    this.router.navigate(['']);
  }
  renderBoards() {
    this.router.navigate(['/boards']);
  }
  renderSettings() {
    this.router.navigate(['/settings']);
  }

  renderHelp() {
    this.router.navigate(['/help']);
  }

}
