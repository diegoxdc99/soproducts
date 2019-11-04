import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CityPipe } from './pipes/city.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CityPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CityPipe
  ]
})
export class SharedModule { }
