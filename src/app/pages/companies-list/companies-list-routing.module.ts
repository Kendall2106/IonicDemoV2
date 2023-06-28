import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesListPage } from './companies-list.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesListPageRoutingModule {}
