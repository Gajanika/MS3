import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent,RouterModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Leave_Management';
}
