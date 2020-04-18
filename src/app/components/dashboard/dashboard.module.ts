import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class DashboardModule { }
