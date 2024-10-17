import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YosraComponent } from './yosra/yosra.component';


@NgModule({
  declarations: [
    YosraComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YosraComponent // Export so it can be used outside the module
  ]

})
export class MyModuleModule { }
