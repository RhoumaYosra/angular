import { Routes } from '@angular/router';
import { YosraComponent } from './yosra/yosra.component';
import { AnimalComponent } from './animal/animal.component';

export const routes: Routes = [
    {path:'yosra',component:YosraComponent},
    {path:'animal',component:AnimalComponent}
];
