import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BioDataComponent } from './bio-data/bio-data.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'bio-data', component: BioDataComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
