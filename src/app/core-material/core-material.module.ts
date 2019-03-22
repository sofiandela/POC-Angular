import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatSlideToggleModule, MatTreeModule, MatStepperModule, MatProgressSpinnerModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatSidenavModule, MatCardModule, MatDividerModule, MatToolbarModule, MatSelectModule } from '@angular/material'

let materialModules = [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatInputModule, 
    MatSidenavModule, 
    MatCardModule, 
    MatDividerModule,
    MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports:[
    ...materialModules
  ]
})
export class CoreMaterialModule { }
