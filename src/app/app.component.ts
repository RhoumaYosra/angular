import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YosraComponent } from "./yosra/yosra.component";
import { AnimalComponent } from "./animal/animal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YosraComponent, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
