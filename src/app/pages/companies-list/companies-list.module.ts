import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompaniesListPage } from './companies-list.page';
import { CompaniesListPageRoutingModule } from './companies-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniesListPageRoutingModule
  ],
  declarations: [CompaniesListPage]
})
export class CompaniesListPageModule {}
