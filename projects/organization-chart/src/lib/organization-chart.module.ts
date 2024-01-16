import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartComponent } from './organization-chart.component';
import { OrganizationChartService } from './organization-chart.service';



@NgModule({
  declarations: [
    OrganizationChartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OrganizationChartService
  ],
  exports: [
    OrganizationChartComponent
  ]
})
export class OrganizationChartModule { }
