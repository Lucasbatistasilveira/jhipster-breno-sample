import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterBrenoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterBrenoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class JhipsterBrenoHomeModule {}
