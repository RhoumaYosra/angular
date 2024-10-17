import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YosraComponent } from "./my-module/yosra/yosra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YosraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
